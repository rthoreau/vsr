<template>
  <div id="eventdash">
    <p class="title htitle">événements</p>
    <div class="address" :class="sended ? 'sended' : ''">
      <button @click="send()"><i class="fa fa-location-arrow"></i></button>
      <div class="input"><input type="search" v-model="address" placeholder="Adresse" v-on:keyup.enter="send()"></div>
      
      <div class="signal" v-if="sended">
        <p><b>3 signalements autour de 15km</b></p>
        <p>de votre position (dernier il y a 2 jour</p>
        <div class="signal-conf" v-if="signalShow">
          <p class="signal-ask">Pouvez-vous confirmer ces signalements ?</p>
          <button @click="hideSignal()">Oui</button><button @click="hideSignal()">Non</button>
        </div>
      </div>
    </div>
    <div class="map">
    <GmapMap
      :center="{lat:44.7010, lng:-1.0965}"
      :zoom="10"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
      :options="styles"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
    </div>
    <div class="links">
      <div class="link" @click="$router.push({path: '/Events'})">
        <div class="pic"><i class="fa fa-users"></i></div>
        Participer
      </div>
      <div class="link" @click="$router.push({path: '/Event/'})">
        <div class="pic"><i class="fa fa-cog"></i></div>
        Organiser
      </div>
      <div class="link">
        <div class="pic"><i class="fa fa-exclamation-triangle"></i></div>
        Signaler
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EventDash',
  data () {
    return {
      id: 0,
      titre: '',
      date: '',
      time: '',
      lieu: '',
      description: '',
      type: 0,
      sended: false,
      signalShow: true,
      address: '',
      styles: {styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]},
      markers: [
        {
          title: 'Collecte au Cap Ferret',
          position: {lat: 44.763134, lng: -1.158961}
        },
        {
          title: 'Collecte sur Bordeaux',
          position: {lat: 44.735713, lng: -1.089196}
        },
        {
          title: 'Ramassage des déchets sur la plage',
          position: {lat: 44.640485, lng: -1.084235}
        }
      ]
    }
  },
  methods: {
    send(){
      if (this.address !== ''){
        this.sended = true
      }
    },
    hideSignal(){
      this.signalShow = false;
    },
    add () {
      var self = this;
      axios.post('http://surfrider.alwaysdata.net/xmlhttp.php', {
        operation: 'event',
        id: self.id,
        titre: self.titre,
        date: self.date,
        time: self.time,
        lieu: self.lieu,
        description: self.description,
        type: self.type,
        mode: 'json'
      })
      .then(function (response) {
        if (response.id) {
          self.$router.push({path: '/Event/' + response.id})
        } else {
          alert(response.error);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    request () {
      var self = this;
      axios.post('http://surfrider.alwaysdata.net/xmlhttp.php', {
        operation: 'events',
        id: self.$session.get('user_id'),
        mode: 'json'
      })
      .then(function (response) {
        response.data.events.map(function (e) {
          if (e.id === self.$route.params.id) {
            self.id = e.id
            self.titre = e.titre
            self.description =  e.description
            self.date = e.date
            self.time = e.time
            self.lieu = e.lieu
            self.type = e.type
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted () {
    this.request();
  },
  watch: {
    address: function (val) {
      this.sended = val === '' ? false : this.sended;
    }
  }
}
</script>

<style>
.map{
  width:80%;
  margin:auto;
  height:60%;
  border-radius:8px;
  overflow:hidden;
}
#eventdash .title:after{
  content:none;
}
.address{
  width:80%;
  margin:auto auto 15px;
}
.address button{
  width:2.2rem;
  height:2.2rem;
  margin-right:5%;
}
.address input{
  display:inline-block;
  height:2.2rem;
  width:100%;
  border:none;
  border-radius:5px;
  padding:0.5rem;
  font-size:1rem;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
.address .input{
  display:inline-block;
  width:calc(95% - 2.2rem);
}
.links{
  width:80%;
  margin:15px auto;
}
.link{
  display:inline-block;
  width:26.333%;
  height:5.2rem;
  background-color:#ffde6b;
  font-weight:bold;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
  border-radius:5px;
  font-size:0.9rem;
}
.link + .link{
  margin-left:9%;
}
.link i{
  font-size:1.8rem;
  height:2rem;
  padding:1rem 0;
  margin-bottom:1rem;
}
.signal{
  margin:20px auto;
  text-align:left;
}
.signal button{
  width:4rem;
  font-weight:bold;
}
.signal-ask{
  margin:15px 0 10px;
}
</style>

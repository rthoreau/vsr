<template>
  <div id="events" class="events">
    <button class="back-link" @click="$router.go(-1)"><i class="fa fa-chevron-left"></i> Retour</button>
    <p class="from"><input type="text" value="50 avenue de l'impératrice, BIARRITZ 64200"></p>
    <p class="title">événements à proximité</p>
    <div class="projet" v-for="(e, index) in events" v-if="e.etat === 'valide'" :key="index" @click="$router.push({path:'/Event/' + e.id})">
      <div class="image-container rel">
        <img :src="e.pic" alt="">
        <span class="dist"><i class="check"></i>à {{Math.floor(Math.random() * Math.floor(150))/10}} km</span>
      </div>
      <p class="project-title">{{e.titre}}</p>
      <div class="content">
        <span><i class="fa fa-calendar"></i> {{e.date}}</span>
        <span><i class="fa fa-clock"></i> {{e.time}}</span>
        <span><i class="fa fa-user"></i> {{e.particips ? e.particips : 2}}</span>
        <span><i class="fa fa-tag"></i> {{types[e.type]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import amount from '../components/Amount'
import axios from 'axios'

export default {
  name: 'Events',
  components: {
    amount
  },
  data () {
    return {
      events: [],
      types: ['Plage', 'Lac', 'Rivière', 'Sous-marin']
    }
  },
  methods: {
  },
  mounted () {
    var self = this;
    var imgs = ['https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W', 'https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W', 'https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W']
    axios.post('http://surfrider.alwaysdata.net/xmlhttp.php', {
      operation: 'events',
      id: self.$session.get('user_id'),
      mode: 'json'
    })
    .then(function (response) {
      self.events = response.data.events
      self.events.map(function (e, index) {
        e.pic = imgs[index]
        e.time = e.time.substring(0,5)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    this.$emit('nav', 'event');
  },
  beforeDestroy () {
    this.$emit('nav', '');
  }
}
</script>

<style>
.from{
  width:80%;
  margin:auto;
}
.from input{
  margin:20px 0 0;
  background-color:white;
  width:100%;
  padding:0.5rem 1rem;
  border-radius:8px;
  font-size:0.85rem;
  border:none;
  color:#585858;
}
#events .title{
  margin-top:25px;
  text-align:center;
}
.dist{
  position:absolute;
  right:3%;
  bottom:10px;
  background-color:white;
  padding: 0.2rem 0.3rem;
  font-size:0.7rem;
  border-radius:5px;
  color:#ccc;
}
.page.events .content{
  font-weight:normal;
  font-size:0.85rem;
}
.page.events .content span{
  display:inline-block;
}
.page.events .projet i {
  margin:0 0.3rem;
}
</style>

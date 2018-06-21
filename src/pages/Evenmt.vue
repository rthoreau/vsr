<template>
  <div id="event" class="events forms">
    <div v-if="id">
      <button class="back-link" @click="$router.go(-1)"><i class="fa fa-chevron-left"></i> Retour à la liste</button>
      <div class="projet">
        <div class="image-container rel">
          <img :src="pic" alt="">
          <span class="dist"><i class="check"></i>à {{Math.floor(Math.random() * Math.floor(150))/10}} km</span>
        </div>
        <p class="project-title">{{titre}}</p>
        <div class="content">
          <span><i class="fa fa-calendar"></i> {{date}}</span>
          <span><i class="fa fa-clock"></i> {{time}}</span>
          <span><i class="fa fa-user"></i> {{particips ? particips : 2}}</span>
          <span><i class="fa fa-tag"></i> {{types[type]}}</span>
        </div>
        <p><span class="lien">Ajouter à mon calendrier</span></p>
      </div>
      <p class="title htitle">Médias</p>
      <p>
        <label class="filer"> <input type="file">Ajouter des photos</label>
        <label class="filer"> <input type="file">Ajouter des vidéos</label>
      </p>
      <div class="medias">
        <div class="img-content">
          <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
          <img src="https://scontent-cdt1-1.cdninstagram.com/vp/af29cde8b164dba0b6ab4ea805584131/5BA59CC7/t51.2885-15/e35/34982646_669303953415306_5444918942390812672_n.jpg" alt="" class="img">
        </div>
        <div class="img-content">
          <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
          <img src="https://scontent-cdt1-1.cdninstagram.com/vp/675df8baf203941ad69336d62d29f82d/5BEA992C/t51.2885-15/s640x640/sh0.08/e35/34669984_1780359908718168_1640782501842518016_n.jpg" alt="" class="img">
        </div>
        <div class="img-content">
          <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
          <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fvp%2F02ed7e877c81e96d3489f99d2411017e%2F5BA30ABE%2Ft51.2885-15%2Fe35%2F35166452_149830445886151_1620333389452148736_n.jpg" alt="" class="img">
        </div>
        <div class="img-content">
          <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
          <img src="https://scontent-cdt1-1.cdninstagram.com/vp/42608995fde66b52a5613b4956e76e01/5BA5D218/t51.2885-15/e35/35459242_2532877490071493_4310120000749830144_n.jpg" alt="" class="img">
        </div>
        <button class="more">Voir plus</button>
      </div>
      <section class="orga">
        <p class="title htitle">Organisateur</p>
        <div class="form">
          <div class="white-form">
            <p><label>Nom Prénom<input type="text" readonly :value="auteur_nom + ' ' + auteur_prenom"></label></p>
            <p>{{auteur_role ? 'Administrateur' : 'Bénévole'}} Surfrider</p>
            <p><label>Adresse mail <input type="text" readonly :value="auteur_mail"></label></p>
            <p><label>Téléphone <input type="text" readonly value="01 02 03 04 05"></label></p>
          </div>
        </div>
      </section>
      <p class="title htitle mbottom">Réseaux sociaux</p>
      <p class="buttons">
        <button class="tw">Twitter</button>
        <button class="fb">Facebook</button>
      </p>
      <p class="htitle"></p>
      <button class="yb">Participer</button>
    </div>
    <div v-else>
      <button class="back-link" @click="$router.go(-1)"><i class="fa fa-chevron-left"></i> Retour à la carte</button>
      <p class="title htitle">Organiser un événement</p>
      <div class="form">
          <div class="white-form">
            <p><label>Titre <input type="text" name="titre" v-model="titre" placeholder="Collecte ..."></label></p>
            <p>Type</p>
            <p class="types">
              <input type="radio" value="0" v-model="type" id="type_check_1"><label class="radiobtn" for="type_check_1">Plage</label>
              <input type="radio" value="1" v-model="type" id="type_check_2"><label class="radiobtn" for="type_check_2">Lac</label>
              <input type="radio" value="2" v-model="type" id="type_check_3"><label class="radiobtn" for="type_check_3">Rivière</label>
              <input type="radio" value="3" v-model="type" id="type_check_4"><label class="radiobtn" for="type_check_4">Sous-marin</label>
            </p>
            <p><label>Lieu <input type="text" name="lieu" v-model="lieu" placeholder="Paris"></label></p>
            <p class="datetime"><label><i class="fa fa-calendar"></i> <input type="date" name="date" v-model="date"></label>
            <label><i class="fa fa-clock"></i> <input type="time" name="time" v-model="time"></label></p>
            <label class="nb">Description <textarea v-model="description" rows="8" placeholder="Description"></textarea></label>
          </div>
        </div>
      <p class="title htitle">Médias</p>
      <p>
        <label class="filer"> <input type="file">Ajouter des photos</label>
        <label class="filer"> <input type="file">Ajouter des vidéos</label>
      </p>
      <section class="orga">
        <p class="title htitle">Organisateur</p>
        <div class="form">
          <div class="white-form">
            <p><label>Nom Prénom<input type="text" readonly :value="$session.get('nom') + ' ' + $session.get('prenom')"></label></p>
            <p>{{$session.get('admin') === '1' ? 'Administrateur' : 'Bénévole'}} Surfrider</p>
            <p><label>Adresse mail <input type="text" readonly :value="$session.get('mail')"></label></p>
            <p><label>Téléphone <input type="text" readonly value="01 02 03 04 05"></label></p>
          </div>
        </div>
      </section>
      <p>Souhaitez-vous un kit surfrider pour votre événement ?</p>
      <p>
        <label class="radiobtn" :class="kit === '1' ? 'selected' : ''"><input type="radio" v-model="kit" value="1"> Oui</label>
        <label class="radiobtn" :class="kit === '2' ? 'selected' : ''"><input type="radio" v-model="kit" value="0"> Non</label>
      </p>
      <p class="htitle"></p>
      <button class="yb">Participer</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Evenmt',
  data () {
    return {
      id: 0,
      titre: '',
      date: '',
      time: '',
      lieu: '',
      description: '',
      type: 0,
      pic: '',
      auteur_nom: '',
      auteur_prenom: '',
      auteur_mail: '',
      auteur_role: '',
      particips: 0,
      kit: 1,
      types: ['Plage', 'Lac', 'Rivière', 'Sous-marin'],
      imgs: ['https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W', 'https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W', 'https://cdn.newsapi.com.au/image/v1/1841b2e52aa5cd75ef19343f3da170d3?width=1024', 'http://images.vedura.fr/eco-geste/dechet-plage+3002003.jpg', 'http://www.oleron-plage.fr/wp-content/uploads/2011/05/Ramassage-de-d%C3%A9chets-%C3%A0-l%C3%AEle-dOl%C3%A9ron.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIEcqkJyNMUHRgH1ZGjczmjs5KJt5WSzOkZF2jGnucqsvU4W']
    }
  },
  methods: {
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
        response.data.events.map(function (e, index) {
          if (e.id === self.$route.params.id) {
            self.id = e.id
            self.titre = e.titre
            self.description =  e.description
            self.date = e.date
            self.time = e.time
            self.lieu = e.lieu
            self.auteur_nom = e.auteur_nom
            self.auteur_prenom = e.auteur_prenom
            self.auteur_mail = e.auteur_mail
            self.auteur_role = e.auteur_role
            self.type = e.type
            self.pic = self.imgs[index]
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted () {
    this.id = this.$route.params.id;
    if (this.id) {
      this.request();
    }
    this.$emit('nav', 'event');
  },
  beforeDestroy () {
    this.$emit('nav', '');
  }
}
</script>

<style>
#event .htitle.title:after{
  content:none;
}
.htitle{
  margin-left:auto;
  margin-right:auto;
}
#event .title.htitle{
  margin: 30px auto 0;
}
input[type="file"]{
  position:absolute;
  left:-999rem;
}
.filer{
  color:#585858;
  background-color:white;
  width:38%;
  padding:0.5rem;
  font-size:0.9rem;
  display:inline-block;
  border-radius:8px;
  box-shadow:0 2px 10px rgba(13, 88, 72, 0.4);
}
.filer + .filer{
  margin-left:4%;
}
#event .more{
  width:60%;
  margin:20px 20%;
  font-weight:bold;
  text-transform:uppercase;
  padding:0.3rem 0;
}
#event ::-webkit-input-placeholder {
  color:#ccc;
}
#event:-moz-placeholder {
  color:#ccc;
}
#event::-moz-placeholder {
  color:#ccc;
}
#event:-ms-input-placeholder {
  color:#ccc;
}
.tw{
  background-color:#29a4ec;
  color:white;
}
.buttons{
  width:80%;
  margin:auto;
}
.buttons button{
  width:44%;
  padding:0.8rem 0;
}
.buttons button + button{
  margin-left:6%;
}
#event .yb{
  margin-top:2rem;
  padding:1rem;
}
#event .form .white-form{
  color:#585858;
  text-align:left;
  padding:10%;
}
#event .white-form label{
  width:100%;
}
#event .form{
  width:80%;
  margin-bottom:40px;
}
input[readonly]{
  color:#ccc;
}
.lien{
  margin-top:5px;
  display:inline-block;
  font-weight:normal;
  border-bottom:1px solid rgba(0,0,0,0.2);
}
#event textarea{
  background-color:#f7f7f7;
  border:none;
  width:100%;
  padding:1rem;
  resize:none;
  margin-top:15px;
}
.nb{
  border:none!important;
}
#event .datetime label{
  border-bottom:none;
  width:auto;
  margin:0;
}
.datetime{
  border-bottom:1px solid #2ed9cc;
  margin-bottom:25px;
}
#event .datetime i{
  color:#888;
  margin-right:0.5rem;
}
#event .datetime input{
  display:inline-block;
  width:auto;
  font-size:1.2rem;
}
.datetime label + label:before{
  display:inline-block;
  content:'';
  width:1px;
  height:1.5rem;
  background-color:#2ed9cc;
  vertical-align:middle;
  margin-right:0.5rem;
}
select{
  border:none;
}
#event label.radiobtn{
  width:48%;
  border-bottom:none;
  background-color:#e4e4e4;
  padding:0.3rem 0;
  text-align:center;
  color:#aaa;
  margin:3px 0;
}
#event label.radiobtn:nth-child(2n){
  margin-left:2%;
}
.types{
  margin:10px 0 20px;
}
</style>

<template>
  <div id="event" class="events">
    <button class="back-link" @click="$router.go(-1)">Retour à la liste</button>
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
    </div>
    <p class="title htitle">Médias</p>
    <p>
      <label class="filer"> <input type="file">Ajouter une photo</label>
      <label class="filer"> <input type="file">Ajouter une vidéo</label>
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
      <p class="title2">Informations organisateur</p>
      <table>
        <tr>
          <td class="label">Prénom</td>
          <td class="label">Nom</td>
        </tr>
        <tr>
          <td>Joan</td>
          <td>Vilette</td>
        </tr>
      </table>
      <p class="label">Email</p>
      <p>joanvilette@gmail.com</p>
      <p><label>Téléphone</label><input type="text" value="01 02 03 04 05" readonly></p>
    </section>
    <p>Souhaitez-vous un kit surfrider pour votre événement ?</p>
    <p>
      <label><input type="radio" name="kit"> Oui</label>
      <label><input type="radio" name="kit"> Non</label>
    </p>
    <button @click="add()">Organiser</button>
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
      particips: 0,
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
    this.request();
  }
}
</script>

<style>
#event .htitle:after{
  content:none;
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
</style>

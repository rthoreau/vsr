<template>
  <div id="app">
    <nav class="nav" v-if="user_id">
      <ul>
        <li><router-link to="/Don">Don</router-link></li>
        <li><router-link to="/EventDash">Events</router-link></li>
        <li><router-link to="/Dashboard">Dashboard</router-link></li>
        <li><router-link to="/Petitions">Pétitions</router-link></li>
        <li><router-link to="/Account">Compte</router-link></li>
      </ul>
    </nav>
    <router-view class="page" @session="session()"></router-view>
    <div v-if="false">
      <button @click="request()">Request</button>
      <p><label>Titre <input type="text" name="titre" v-model="titre"></label></p>
      <p><label>Date <input type="date" name="date" v-model="date"></label>
      <label> Heure <input type="time" name="time" v-model="time"></label></p>
      <p><label>Lieu <input type="text" name="lieu" v-model="lieu"></label></p>
      <p><label>Description <textarea name="description" v-model="description"></textarea></label></p>
      <p>Type</p>
      <p><label><input type="radio" value="0" v-model="type" name="type">Plage</label>
      <label><input type="radio" value="1" v-model="type" name="type">Lac</label>
      <label><input type="radio" value="2" v-model="type" name="type">Rivière</label>
      <label><input type="radio" value="3" v-model="type" name="type">Sous-marin</label>
      </p>
      <p class="action"><button @click="add()">Enregistrer</button></p>
      <Event v-for="(data) in events" 
        :key="data.id" 
        :event="data" @refresh="request()"></Event>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Event from './components/Event.vue'

export default {
  name: 'app',
  data () {
    return {
      id:0,
      user_id:0,
      titre: '',
      date: '',
      time: '',
      lieu: '',
      description: '',
      type: 0,
      mail: '',
      mdp: '',
      prenom: '',
      nom: '',
      events: []
    }
  },
  components: {
    Event
  },
  methods: {
    request () {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'events',
        id: self.$session.get('user_id'),
        mode: 'json'
      })
      .then(function (response) {
        console.log(response.data);
        self.events = response.data.events
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    add () {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'event',
        id:self.id,
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
          alert('Votre événement a bien été créé !');
          self.id = 0
          self.titre = ''
          self.date = ''
          self.time = ''
          self.lieu = ''
          self.description = ''
          self.type = 0
        } else {
          alert(response.error);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    connect() {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'connexion',
        mail:self.mail,
        mdp: self.mdp,
        mode: 'json'
      })
      .then(function (response) {
        var data = response.data;
        if (response.data.id) {
          self.$session.set('user_id', data.id)
          self.$session.set('admin', data.admin)
          self.$session.set('nom', data.nom)
          self.$session.set('prenom', data.prenom)
          self.mail = ''
          self.mdp = ''
          self.user_id = data.id
          self.nom = data.nom
          self.prenom = data.prenom
        } else {
          alert(data.erreur)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    info(){
      return {id: this.$session.get('user_id'), admin: this.$session.get('admin')}
    },
    disconnect() {
      this.$session.clear();
      this.user_id = 0
      this.nom = ''
      this.prenom = ''
      this.session();
    },
    session(first){
      this.prenom = this.$session.get('prenom')
      this.nom = this.$session.get('nom')
      this.user_id = this.$session.get('user_id')
      if(!this.user_id) {
        this.$router.push({path: '/Login'});
      } else if (!first) {
        this.$router.push({path: '/Dashboard'});
      }
    }
  },
  mounted () {
    this.session(true);
  }
}
</script>

<style>
html,body{
  width:100%;
  height:100%;
}
body{
  padding:0;
  margin:0;
}
body *{
  box-sizing:border-box;
}
a{
  color:inherit;
  text-decoration:none;
}
a:hover{
  color:#1f509b;
}
ul{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
  list-style-type:none;
}
ul li{
  height:100%;
  display: inline-block;
}
p{
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width:100%;
  height:100%;
}
.page{
  overflow:auto;
  height:calc(100% - 2.5rem)
}
.nav{
  position:fixed;
  bottom:0;
  height:2.4rem;
  background-color:#ddd;
  width:100%;
  text-align:center;
}
.nav li {
  width:20%;
}
.nav a{
  display:inline-block;
  width:100%;
  height:100%;
  padding:0.5rem 0;
}
.nav a.router-link-exact-active{
  background-color:#b6bebb;
}
</style>

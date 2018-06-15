<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view class="page" @session="session()"></router-view>
    <nav v-if="user_id">
      <ul>
        <li><router-link to="/Don">Don</router-link></li>
        <li><router-link to="/Don">Event</router-link></li>
        <li><router-link to="/Don">Dashboard</router-link></li>
        <li><router-link to="/Don">Petition</router-link></li>
        <li><router-link to="/Don">Compte</router-link></li>
      </ul>
    </nav>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-if="user_id">
      <p>{{prenom + ' ' + nom}}</p>
      <button @click="disconnect()">Deconnexion</button>
    </div>
    <div v-else>
      <p><label>Mail <input type="text" name="mail" v-model="mail"></label></p>
      <p><label>Mot de passe <input type="password" name="mdp" v-model="mdp" v-on:keyup.enter="connect()"></label></p>
      <button @click="connect()">Connexion</button>
    </div>
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
    <input type="hidden" name="id" v-model="id">
    <p class="action"><button @click="add()">Enregistrer</button></p>
    <Event v-for="(data) in events" 
      :key="data.id" 
      :event="data" @refresh="request()"></Event>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
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
    HelloWorld,
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
    },
    session(){
      this.prenom = this.$session.get('prenom')
      this.nom = this.$session.get('nom')
      this.user_id = this.$session.get('user_id')
      console.log(this.$session.get('user_id'));
    }
  },
  mounted () {
    this.session();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

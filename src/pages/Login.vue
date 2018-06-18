<template>
  <div id="login">
    <div class="logo">
      <div class="logo-container"></div>
      <p class="title">SURFRIDER APP</p>
    </div>
    <div class="form">
      <p><label>Email <input type="text" name="mail" v-model="mail"></label></p>
      <p><label>Mot de passe <input type="password" name="mdp" v-model="mdp" v-on:keyup.enter="connect()"></label></p>
      <button @click="connect()">Connexion</button>
      <button class="fb">avec Facebook</button>
    </div>
    <div class="create">
      <p>Pas encore de compte ?</p>
      <router-link to="/Create">S'inscrire</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Event',
  data () {
    return {
      mail:'',
      mdp:''
    }
  },
  methods: {
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
          self.$session.set('mail', data.mail)
          self.$emit('session');
        } else {
          alert(data.erreur)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>
</style>

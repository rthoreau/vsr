<template>
  <div id="login">
    <router-link class="back-link" to="/Login">Retour Connexion</router-link>
    <p class="title">Inscription</p>
    <button class="fb">Connexion Facebook</button>
    <div class="form">
      <p><label for="civ">Civilité</label></p>
      <p><select name="civ" id="select_civ" v-model="civ">
        <option value="">-</option>
        <option value="0">M.</option>
        <option value="1">Mme</option>
      </select></p>
      <p><label>Nom <input type="text" name="nom" v-model="nom"></label></p>
      <p><label>Prénom <input type="text" name="prenom" v-model="prenom"></label></p>
      <p><label>Email <input type="text" name="mail" v-model="mail"></label></p>
      <p><label>Mot de passe <input type="password" name="mdp" v-model="mdp" v-on:keyup.enter="connect()"></label></p>
      <button @click="connect()">S'inscrire</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Event',
  data () {
    return {
      mail:'',
      mdp:'',
      nom:'',
      prenom: '',
      civ: ''
    }
  },
  methods: {
    particip(check) {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'participe',
        id_user: self.$session.get('user_id'),
        id_event: self.event.id,
        participe: check ? 'oui' : 'non',
        mode: 'json'
      })
      .then(function (response) {
        var data = response.data;
        self.$emit('refresh')
        console.log(data)
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
          self.emit('session');
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

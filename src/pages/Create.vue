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
      <p><label>Mot de passe <input type="password" name="mdp" v-model="mdp" v-on:keyup.enter="create()"></label></p>
      <button @click="create()">S'inscrire</button>
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
      mdp:'',
      nom:'',
      prenom: '',
      civ: ''
    }
  },
  methods: {
    create() {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'create',
        mail:self.mail,
        mdp: self.mdp,
        nom: self.nom,
        prenom:self.prenom,
        civ:self.civ,
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

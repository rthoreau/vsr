<template>
  <div id="create" class="forms">
    <router-link class="back-link" to="/Login"><i class="fa fa-chevron-left"></i> Retour Connexion</router-link>
    <p class="title">Inscription</p>
    <div class="form">
      <div class="white-form">
        <p class="rel select"><label for="select_civ" class="civ">Civilité</label>
        <select name="civ" id="select_civ" v-model="civ">
          <option value="0">Mlle</option>
          <option value="1">M.</option>
          <option value="2">Mme</option>
        </select></p>
        <p><label><input type="text" name="prenom" v-model="prenom" placeholder="Prénom*"></label></p>
        <p><label><input type="text" name="nom" v-model="nom" placeholder="Nom*"></label></p>
        <p><label><input type="text" name="mail" v-model="mail" placeholder="Email"></label></p>
        <p><label><input type="password" name="mdp" v-model="mdp" placeholder="Mot de passe"></label></p>
        <p class="rel"><label><input type="password" name="mdpconfirm" v-model="mdpconfirm" v-on:keyup.enter="create()" placeholder="Répéter le mot de passe"><i v-if="mdpconfirm && mdpconfirm === mdp" class="fa fa-check right"></i> <i v-if="mdpconfirm && mdpconfirm !== mdp" class="fa fa-times red right"></i></label></p>
      </div>
      <button @click="create()">S'inscrire</button>
      <button class="fb">Facebook</button>
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
      mdpconfirm: '',
      nom:'',
      prenom: '',
      civ: 0
    }
  },
  methods: {
    create() {
      if (this.mdp !== this.mdpconfirm) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      var self = this;
      axios.post('http://surfrider.alwaysdata.net/xmlhttp.php', {
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
.rel{
  position:relative;
}
.right{
  position:absolute;
  right:10%;
  top:40%;
  transform:translate(0, -50%);
}
.back-link{
  width:100%;
  background-color:#96ead7;
  color:white;
  text-transform:uppercase;
  font-weight:bold;
  text-align:left;
  padding:1rem 1.8rem;
  font-size:1.1rem;
  border-radius:0!important;
  box-shadow:0 2px 10px rgba(13, 88, 72, 0.2);
}
.back-link i{
  margin-right:10px;
}
.title{
  display:block;
  text-transform:uppercase;
  font-weight:bold;
  width:75%;
  text-align:left;
  margin:10% auto 1rem;
  font-size:1.1rem;
}
.civ{
  color:#585858;
  padding:10px 0;
  margin-top:20px;
}
#select_civ{
  position:absolute;
  right:10%;
  top:50%;
  padding:5px;
  transform:translate(0,-50%);
  font-size:1rem;
}
.forms .form{
  width:75%;
}
.forms .white-form{
  padding-bottom:20px;
}
.forms label{
  border-bottom:1px solid #2ed9cc;
  margin-bottom:1.4rem;
}
.forms .form input{
  padding-left:0;
  padding-right:0;
  width:100%;
}
#create .form button{
  margin-top:15%;
}
i.red{
  color:rgb(230, 87, 87);
}
.select:after{
  position:absolute;
  content:'';
  width:0;
  height:0;
  right:11%;
  top:48%;
  margin-top:5px;
  transform:translate(0,-50%);
  border:7px solid;
  border-color:#2ed9cc transparent transparent;
}
</style>

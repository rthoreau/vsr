<template>
  <div id="login">
    <div class="logo">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="">
      </div>
      <p class="title">Wave'Up</p>
    </div>
    <div class="form">
      <div class="white-form">
        <p><label class="underlined"><i class="fa fa-user"></i> <input type="text" name="mail" v-model="mail" placeholder="Email"></label></p>
        <p><label><i class="fa fa-lock"></i> <input type="password" name="mdp" v-model="mdp" v-on:keyup.enter="connect()" placeholder="Mot de passe"></label></p>
      </div>
      <button @click="connect()">Connexion</button>
      <button class="fb">Facebook</button>
    </div>
    <div class="create">
      <p>Pas encore de compte ?</p>
      <router-link to="/Create" class="cta">S'inscrire</router-link>
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
.page{
  text-align:center;
}
.logo{
  margin:10% auto;
  width:50%;
}
.logo .title{
  font-weight:bold;
  text-transform:uppercase;
  font-size:1.4rem;
  letter-spacing:0.3rem;
}
.logo img{
  width:100%;
  margin-bottom:4%;
}
.white-form{
  background-color:white;
  width:100%;
  border-radius:6px;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
.white-form i{
  color:#2ed9cc;
}
.white-form input{
  width:70%;
  border:none;
  padding:10px;
  font-size:1rem;
  outline:none;
}
.white-form label{
  width:80%;
  text-align:left;
  display:inline-block;
}
.white-form .underlined{
  border-bottom: 1px solid rgba(46, 217, 203, 0.233);
}
.form button{
  width:48%;
  margin:15px 0;
}
.form button + button{
  margin-left:4%;
}
.form{
  width:65%;
  margin:0 auto 8%;
}
button, a{
  display:inline-block;
  background-color:white;
  border:none;
  padding:8px;
  border-radius:5px;
  font-size:0.9rem;
  color:#2ed9cc;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
.fb{
  background-color:#0980b5;
  color:white;
}
.cta{
  font-weight:bold;
  text-transform:uppercase;
  width:45%;
  margin:2% 0;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
</style>

<template>
  <div id="account" class="forms">
    <p class="title htitle">Mon compte</p>
    <p class="infos">Les infos renseignées vous donnent accès à</p>
    <div class="access">
      <div class="pic"><i class="fa fa-check"></i></div>
      <p>Events</p>
    </div>
    <div class="access">
      <div class="pic"><i class="fa fa-times"></i></div>
      <p>Petitions</p>
    </div>
    <div class="access">
      <div class="pic"><i class="fa fa-check"></i></div>
      <p>Don</p>
    </div>
    <div class="title htitle"></div>
    <section class="form">
      <div class="title">Général</div>
      <div class="white-form form-content">
        <p class="rel select"><label for="select_civ" class="civ">Civilité</label>
        <select name="civ" id="select_civ" v-model="civ">
          <option value="0">Mlle</option>
          <option value="1">M.</option>
          <option value="2">Mme</option>
        </select></p>
        <p><label>Prénom<input type="text" name="prenom" v-model="prenom" placeholder="Prénom*"></label></p>
        <p><label>Nom<input type="text" name="nom" v-model="nom" placeholder="Nom*"></label></p>
        <p><label>Adresse Mail<input type="text" name="mail" v-model="mail" placeholder="Email"></label></p>
        <p><label>Mot de passe<input type="password" name="mdp" v-model="mdp" placeholder="Mot de passe"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title">Event</div>
      <div class="form-content white-form">
        <p><label>Téléphone <input type="text" name="nom" v-model="phone"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title">Pétitions</div>
      <div class="form-content white-form">
        <p><label>Pays <input type="text" name="nom" v-model="pays"></label></p>
        <p><label>Code postal / Ville <input type="text" name="nom" v-model="ville"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title">Don</div>
      <div class="form-content white-form">
        <p><label>Raison sociale <input type="text" name="nom"></label></p>
        <p><label>Adresse <input type="text" name="nom"></label></p>
        <p><label>Complément d'adresse <input type="text" name="nom"></label></p>
        <p><label>Code postal / Ville <input type="text" name="nom"></label></p>
        <p><label>Pays <input type="text" name="nom"></label></p>
        <p>
          <label>Moyen de paiement <input type="text"></label>
        </p>
      </div>
    </section>
    <button class="yb">Enregistrer</button>
    <button @click="disconnect()" class="yb">Déconnexion</button>
  </div>
</template>

<script>

export default {
  name: 'Account',
  components: {
  },
  data () {
    return {
      civ: 0,
      nom: '',
      prenom: '',
      mail: '',
      mdp: 'aaaaaaaaa',
      phone: '',
      pays: '',
      ville: ''
    }
  },
  props: {
  },
  methods: {
    disconnect() {
      this.$session.clear();
      this.user_id = 0
      this.nom = ''
      this.prenom = ''
      this.$emit('session')
    },
  },
  mounted () {
    this.prenom = this.$session.get('prenom')
    this.nom = this.$session.get('nom')
    this.mail = this.$session.get('mail')
    this.user_id = this.$session.get('user_id')
  }
}
</script>

<style>
.infos{
  font-weight:bold;
  width:80%;
  font-size:1.2rem;
  margin:20px auto;
}
.access{
  display:inline-block;
  width:25%;
}
.access i{
  background-color:#ffde6b;
  width:3rem;
  height:3rem;
  border-radius:50%;
  font-size:1.5rem;
  padding:0.8rem 0;
  margin-bottom:0.5rem;
}
.access i.fa-times{
  color:#ddd;
  background-color:white;
}
.form .title{
  font-size:1.5rem;
  text-align:center;
  letter-spacing:0.2rem;
}
#account label{
  color:#585858;
}
#account .form-content{
  padding:15px 0 0;
}
.yb + .yb{
  display:block;
  margin:20px auto;
}
.yb {
  width:13rem;
}
</style>

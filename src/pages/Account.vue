<template>
  <div id="petitions">
    <p class="title">Mon compte</p>
    <p>Les infos renseignées vous donnent accès à</p>
    <div class="access ok">
      <div class="pic"></div>
      <p>Events</p>
    </div>
    <div class="access">
      <div class="pic"></div>
      <p>Petitions</p>
    </div>
    <div class="access">
      <div class="pic"></div>
      <p>Don</p>
    </div>
    <section class="form">
      <div class="title2">Global</div>
      <div class="form-content">
        <p><label for="civ">Civilité</label></p>
        <p><select name="civ" id="select_civ" v-model="civ">
          <option value="">-</option>
          <option value="0">M.</option>
          <option value="1">Mme</option>
        </select></p>
        <p><label>Nom <input type="text" name="nom" v-model="nom"></label></p>
        <p><label>Prénom <input type="text" name="prenom" v-model="prenom"></label></p>
        <p><label>Email <input type="text" name="mail" v-model="mail"></label></p>
        <p><label>Mot de passe <input type="password" name="mdp" v-model="mdp"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title2">Event</div>
      <div class="form-content">
        <p><label>Téléphone <input type="text" name="nom" v-model="phone"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title2">Pétitions</div>
      <div class="form-content">
        <p><label>Pays <input type="text" name="nom" v-model="pays"></label></p>
        <p><label>Code postal / Ville <input type="text" name="nom" v-model="ville"></label></p>
      </div>
    </section>
    <section class="form">
      <div class="title2">Don</div>
      <div class="form-content">
        <p><label>Raison sociale <input type="text" name="nom"></label></p>
        <p><label>Adresse <input type="text" name="nom"></label></p>
        <p><label>Complément d'adresse <input type="text" name="nom"></label></p>
        <p><label>Code postal / Ville <input type="text" name="nom"></label></p>
        <p><label>Pays <input type="text" name="nom"></label></p>
        <p>Moyen de paiement</p>
        <p>
          <label>Paypal <input type="radio" name="mp" value="paypal"></label>
          <label>CB <input type="radio" name="mp" value="cb"></label>
          <label>BitCoin <input type="radio" name="mp" value="BitCoin"></label>
        </p>
      </div>
    </section>
    <button>Enregistrer</button>
    <button @click="disconnect()">Déconnexion</button>
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
</style>

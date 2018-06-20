<template>
  <div id="event">
    <button class="back-link" @click="$router.go(-1)">Retour à la liste</button>
    <p class="title">Organiser un événement</p>
    <p><label>Titre <input type="text" name="titre" v-model="titre"></label></p>
    <p>Type</p>
    <p>
      <label><input type="radio" value="0" v-model="type" name="type">Plage</label>
      <label><input type="radio" value="1" v-model="type" name="type">Lac</label>
      <label><input type="radio" value="2" v-model="type" name="type">Rivière</label>
      <label><input type="radio" value="3" v-model="type" name="type">Sous-marin</label>
    </p>
    <p><label>Lieu <input type="text" name="lieu" v-model="lieu"></label></p>
    <p><label>Date <input type="date" name="date" v-model="date"></label>
    <label> Heure <input type="time" name="time" v-model="time"></label></p>
    <p><label>Description <textarea name="description" v-model="description"></textarea></label></p>
    <p>Médias</p>
    <p>
      <label class="file"> <input type="file">Ajouter une photo</label>
      <label class="file"> <input type="file">Ajouter une vidéo</label>
    </p>
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
      type: 0
    }
  },
  methods: {
    add () {
      var self = this;
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
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
      axios.post('http://localhost:8888/psr/xmlhttp.php', {
        operation: 'events',
        id: self.$session.get('user_id'),
        mode: 'json'
      })
      .then(function (response) {
        response.data.events.map(function (e) {
          if (e.id === self.$route.params.id) {
            self.id = e.id
            self.titre = e.titre
            self.description =  e.description
            self.date = e.date
            self.time = e.time
            self.lieu = e.lieu
            self.type = e.type
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
</style>

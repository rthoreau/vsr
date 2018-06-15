<template>
  <div class="event">
    <p class="title">{{event.titre}}</p>
    <p class="date"><span class="date">{{event.date}}</span><span class="time">{{event.time}}</span></p>
    <p class="lieu">{{event.lieu}}</p>
    <p class="description">{{event.description}}</p>
    <button @click="particip(true)" v-if="event.participe !== 'oui'">Je participe</button>
    <button @click="particip(false)" v-if="event.participe !== 'non'">Je ne participe {{event.participe ? 'plus' : 'pas'}}</button>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Event',
  props: {
    event:true
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
    }
  }
}
</script>

<style>
</style>

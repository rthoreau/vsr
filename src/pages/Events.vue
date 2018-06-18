<template>
  <div id="events">
    <p class="from"><input type="text" placeholder="Bordeaux"></p>
    <p class="title">Evéenements à proximité</p>
    <div class="petition" v-for="(e, index) in events" :key="index" @click="$router.push({path: '/Event/' + e.id})">
      <div class="image-container">
        <img :src="e.pic" alt="">
        <span><i class="check"></i>à {{Math.floor(Math.random() * Math.floor(150))/10}} km</span>
      </div>
      <p class="event-title">{{e.titre}}</p>
      <div class="content">
        <span><i class="date"></i> {{e.date}}</span>
        <span><i class="heure"></i> {{e.heure}}</span>
        <span><i class="participants"></i> {{e.partips}}</span>
        <span><i class="type"></i> {{e.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import amount from '../components/Amount'
import axios from 'axios'

export default {
  name: 'Events',
  components: {
    amount
  },
  data () {
    return {
      events: [],
    }
  },
  methods: {
  },
  mounted () {
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
  }
}
</script>

<style>
</style>

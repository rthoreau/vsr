<template>
  <div id="petitions">
    <p class="title">Pétitions</p>
    <p>Faites entendre votre voix en faveur des océans</p>
    <p class="center">Déjà <b>14109</b> signatures</p>
    <div class="petition" v-for="(p, index) in petitions" :key="index" @click="$router.push({path: '/Petition/' + p.id})">
      <div class="image-container">
        <img :src="p.pic" alt="">
        <span><i class="check"></i>{{p.sign}} signatures</span>
      </div>
      <div class="project-title">{{p.titre}}</div>
      <div class="content">{{p.desc}}</div>
      <button>Signer</button>
    </div>
  </div>
</template>

<script>
import amount from '../components/Amount'

export default {
  name: 'Petitions',
  components: {
    amount
  },
  data () {
    return {
      petitions: [
        { id:0,
          titre: 'Appel de l\'Océan pour le climat', 
          pic: 'https://cdn2.theinertia.com/wp-content/uploads/2015/05/2RaceforWater_Pollution_ChristopheLaunay.jpg',
          sign: '6098',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore dicta recusandae harum tempore quia libero consequuntur repudiandae dolores quos molestias unde eius error consectetur, ullam, ratione modi debitis voluptas?'
        },
        { id:1,
          titre: 'Protégeons l\'océan Antarctique', 
          pic: 'http://s1.lprs1.fr/images/2014/05/30/3882697_11-1-120615039_1000x625.jpg',
          sign: '4502',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui vitae nostrum nihil vel, et maiores sit minima odio obcaecati dicta excepturi, iste adipisci quae quo explicabo minus fugit repudiandae.'
        },
      ],
    }
  },
  props: {
  },
  methods: {
  }
}
</script>

<style>
</style>

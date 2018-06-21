<template>
  <div id="petitions">
    <p class="title htitle">Pétitions</p>
    <p class="desc">Faites entendre votre voix en faveur des océans</p>
    <p class="desc">Déjà
    <span class="sign">14109</span>
    signataires</p>
    <div class="projet" v-for="(p, index) in petitions" :key="index" @click="$router.push({path: '/Petition/' + p.id})">
      <div class="image-container">
        <img :src="p.pic" alt="">
        <span class="signs"><i class="check"></i>{{p.sign}} signatures</span>
      </div>
      <div class="project-title">{{p.titre}}</div>
      <button class="yb">Signer</button>
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
#petitions .desc{
  font-weight:bold;
  width:80%;
  margin:20px auto;
  font-size:1.2rem;
  line-height:1.1;
}
.sign{
  display:block;
  line-height:1.1;
  font-size:3rem;
  font-weight:800;
  margin:5px;
}
.signt{
  position:relative;
  opacity:0.9;
  width:90%;
  margin:auto;
  padding-bottom:20px;
  text-align:center;
}
.signt:after{
  height:1px;
  width:90%;
  background-color:white;
  position:absolute;
  bottom:0;
  left:5%;
  content:'';
}
.signs{
  display:inline-block;
  margin:10px 0 0;
}
.yb{
  background-color:#ffde6b;
  color:white;
  text-transform:uppercase;
  font-weight:bold;
  font-size:0.9rem;
  padding:0.5rem 3rem;
}
</style>

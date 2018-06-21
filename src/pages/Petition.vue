<template>
  <div id="petition" v-if="this.data">
    <button class="back-link" @click="$router.go(-1)"><i class="fa fa-chevron-left"></i> Retour</button>
    <div class="projet">
      <div class="head">
        <img :src="data.pic" alt="">
      </div>
      <p class="project-title">{{data.titre}}</p>
      <p class="desc">{{data.desc}}</p>
    </div>
    <p class="sign"><i class="check"></i> {{data.sign}} <span class="small"> signataires </span></p>
    <button class="sticky yb">Signer</button>
  </div>
</template>

<script>
import amount from '../components/Amount'

export default {
  name: 'Petition',
  components: {
    amount
  },
  data () {
    return {
      data: null,
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
  },
  mounted () {
    this.data = this.petitions.filter(p => p.id.toString() === this.$route.params.id)[0];
    this.$emit('nav', 'petitions');
  },
  beforeDestroy () {
    this.$emit('nav', '');
  }
}
</script>

<style>
#petition .desc{
  text-align:left;
  font-weight:normal;
}
.small{
  display:block;
  margin:5px auto 30px;;
  font-size:0.4em;
}
#petition .yb{
  font-size:0.8rem;
  padding:0.8rem 3.5rem;
}
</style>

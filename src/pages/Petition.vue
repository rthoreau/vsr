<template>
  <div id="petition" v-if="this.data">
    <button class="back-link" @click="$router.go(-1)">Retour</button>
    <div class="head">
      <img :src="data.pic" alt="">
    </div>
    <p class="title">{{data.titre}}</p>
    <p class="desc">{{data.desc}}</p>
    <p class="sign"><i class="check"></i> {{data.sign}} signataires</p>
    <div class="title2">Médias</div>
    <div class="medias">
      <div class="img-content">
        <img src="http://www.tvba.fr/wp-content/uploads/2014/03/de%CC%81chet-plage-21.jpg" alt="">
      </div>
      <div class="img-content">
        <img src="http://www.tvba.fr/wp-content/uploads/2014/03/de%CC%81chet-plage-21.jpg" alt="">
      </div>
      <div class="img-content">
        <img src="http://www.tvba.fr/wp-content/uploads/2014/03/de%CC%81chet-plage-21.jpg" alt="">
      </div>
    </div>
    <button class="sticky">Signer</button>
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
  }
}
</script>

<style>
</style>

<template>
  <div id="project" v-if="this.data">
    <button class="back-link" @click="$router.go(-1)">Retour</button>
    <div class="head">
      <img :src="data.pic" alt="">
    </div>
    <p class="title">{{data.titre}}</p>
    <div class="tabs">
      <label class="tab" :class="tab === '0' ? 'active' : ''">A propos <input type="radio" v-model="tab" value="0"></label>
      <label class="tab" :class="tab === '1' ? 'active' : ''">Partners <input type="radio" v-model="tab" value="1"></label>
    </div><div class="tabs-content">
      <div class="tab-content" v-if="tab === '0'">
        {{data.desc}}
      </div>
      <div class="tab-content" v-if="tab === '1'">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odit fugiat illo sequi labore consectetur obcaecati quos laboriosam dolor, nihil, soluta ut in, magni doloremque non ab quo! Veniam, ullam.
      </div>
    </div>
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
    <div class="title2">Soutenir le projet</div>
    <amount></amount>
    <button class="sticky">Soutenir</button>
  </div>
</template>

<script>
import amount from '../components/Amount'

export default {
  name: 'Project',
  components: {
    amount
  },
  data () {
    return {
      data: null,
      tab:'0',
      projects: [
        { id:0,
          titre: 'Collecte en bord de mer', 
          pic: 'https://lemballageecologique.com/wp-content/uploads/2012/11/nouveau_logo_emballages1-1.jpg',
          progress: '10%',
          progressText: '5000€',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore dicta recusandae harum tempore quia libero consequuntur repudiandae dolores quos molestias unde eius error consectetur, ullam, ratione modi debitis voluptas?'
        },
        { id:1,
          titre: 'Ramassage des déchets à Amsterdam', 
          pic: 'https://media.ouest-france.fr/v1/pictures/239258db6da192400f7962ea63f632b7-un-peu-moins-de-dechets-ramasses-sur-la-plage.jpg?width=1260&height=712&fill=0&focuspoint=50%2C25&cropresize=1',
          progress: '30%',
          progressText: '7500€',
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
    this.data = this.projects.filter(p => p.id.toString() === this.$route.params.id)[0];
  }
}
</script>

<style>
.tab{
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  border:1px solid;
  border-color:#181818;
  padding: 0 1rem;
}
.tab input[type="radio"] {
  position:absolute;
  left:-99rem;
}
.tab.active{
  border-bottom-color:white;
}
.tabs-content{
  border:1px solid #181818;
}
</style>

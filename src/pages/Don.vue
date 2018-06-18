<template>
  <div id="don">
    <p class="title">Faire un don global</p>

    <div class="acc" :class="acc1 ? 'open' : ''">
      <label>Je soutiens une fois <input type="checkbox" value="0" v-model="acc1"></label>
    </div>
    <div class="acc-content">
      <div v-if="acc1">
        <amount></amount>
        <button>Valider</button>
      </div>
    </div>

    <div class="acc" :class="acc2 ? 'open' : ''">
      <label>Je soutiens tous les mois <input type="checkbox" value="1" v-model="acc2"></label>
    </div>
    <div class="acc-content">
      <div v-if="acc2">
        <amount></amount>
        <button>Valider</button>
      </div>
    </div>

    <div class="title2">Objectif mensuel</div>
    <div class="progress-container">
      <div class="barre">
        <div class="progress" :style="'width:50%;'"></div>
      </div>
      <span class="progress-text">25k€</span>
    </div>
    
    <p class="title">Soutenir un projet</p>

    <div class="projet" v-for="(p, index) in projects" :key="index" @click="$router.push({path: '/Project/' + p.id})">
      <div class="image-container">
        <img :src="p.pic" alt="">
      </div>
      <div class="project-title">{{p.titre}}</div>
      <div class="content">{{p.desc}}</div>
      <div class="progress-container">
        <div class="barre">
          <div class="progress" :style="'width:' + p.progress"></div>
        </div>
        <span class="progress-text">{{p.progressText}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import amount from '../components/Amount'

export default {
  name: 'Don',
  components: {
    amount
  },
  data () {
    return {
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
      acc1: false,
      acc2: false
    }
  },
  methods: {
  }
}
</script>

<style>
.acc{
  position:relative;
  width:100%;
  border:1px solid #ddd;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.acc label{
  display:inline-block;
  width:100%;
}
.acc input[type="checkbox"]{
  position:absolute;
  left:-99rem;
}
.acc label:after{
  position:absolute;
  content:'';
  right:0;
  top:0;
  width:0;
  height:0;
  border:0.75rem;
  border-style:solid;
  border-color:transparent transparent transparent #181818;
}
.acc.open label:after{
  border-color:#181818 transparent transparent transparent;
}
</style>

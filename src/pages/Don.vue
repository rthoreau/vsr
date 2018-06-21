<template>
  <div id="don">
    <p class="title htitle">Faire un don global</p>

    <div class="acc" :class="acc1 ? 'open' : ''">
      <label>Je soutiens une fois <i :class="'fa fa-chevron-' + (acc1 ? 'down open' : 'right')"></i><input type="checkbox" value="0" v-model="acc1"></label>
    </div>
    <div class="acc-content" :class="acc1 ? 'open' : ''">
      <div class="amounts">
        <amount></amount>
        <button>Valider</button>
      </div>
    </div>

    <div class="acc" :class="acc2 ? 'open' : ''">
      <label>Je soutiens tous les mois <i :class="'fa fa-chevron-' + (acc2 ? 'down open' : 'right')"></i><input type="checkbox" value="1" v-model="acc2"></label>
    </div>
    <div class="acc-content" :class="acc2 ? 'open' : ''">
      <div class="amounts">
        <amount></amount>
        <button>Valider</button>
      </div>
    </div>

    <div class="title2">Objectif mensuel</div>
    <div class="progress-container">
      <div class="barre">
        <progressval :val="55"></progressval>
        <p class="progress-amount"><load :val="16767"></load> € ce mois</p>
      </div>
      <span class="progress-text">25K€</span>
    </div>
    
    <p class="title htitle">Soutenir un projet</p>

    <div class="filtre">
      <i class="fa fa-map-marker"></i>
      Près de moi
    </div>
    <div class="filtre">
      <i class="fa fa-thumbs-up"></i>
      Dernier coup de pouce
    </div>
    <div class="filtre">
      <i class="fa fa-clock"></i>
      Récents
    </div>

    <div class="projet-container" v-for="(p, index) in projects" :key="index" @click="$router.push({path: '/Project/' + p.id})">
      <div class="projet">
        <div class="image-container">
          <img :src="p.pic" alt="">
        </div>
        <div class="project-title">{{p.titre}}</div>
        <div class="content">{{p.desc}}</div>
      </div>
      <div class="progress-container">
        <div class="barre">
          <progressval :val="p.progress"></progressval>
          <p class="progress-amount"><load :val="p.progressText"></load></p>
        </div>
        <span class="progress-text">{{p.max}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import amount from '../components/Amount'
import load from '../components/Load'
import progressval from '../components/ProgressVal'

export default {
  name: 'Don',
  components: {
    amount,
    load,
    progressval
  },
  data () {
    return {
      projects: [
        { id:0,
          titre: 'Collecte en bord de mer', 
          pic: 'http://s1.e-monsite.com/2009/03/03/06/60406546plastique-planete1-jpg.jpg',
          progress: '10',
          progressText: '512',
          max: '6K€',
          desc: 'Soutenez ce projet et faites le évoluer avec d\'autres collaborateur.'
        },
        { id:1,
          titre: 'Ramassage des déchets à Amsterdam', 
          pic: 'https://media.ouest-france.fr/v1/pictures/239258db6da192400f7962ea63f632b7-un-peu-moins-de-dechets-ramasses-sur-la-plage.jpg?width=1260&height=712&fill=0&focuspoint=50%2C25&cropresize=1',
          progress: '30',
          progressText: '3231',
          max: '10K€',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pudiandae.'
        },
      ],
      acc1: false,
      acc2: false,
      monthamount: 0,
      inter: 0
    }
  },
  methods: {
  }
}
</script>

<style>
.acc{
  position:relative;
  width:80%;
  margin:25px auto 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  background-color:white;
  color:#2ed9cc;
  font-weight:bold;
  border-radius:5px;
  text-align:left;
  padding:0.5rem 1rem;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
.acc.open{
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.2);
}
.acc-content{
  background-color:white;
  width:80%;
  margin:auto;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  height:0;
  overflow:hidden;
  padding:0 1rem;
  transition:all 0.5s;
}
.acc-content .amount{
  padding-top:1rem;
}
.acc-content button{
  margin-bottom:2rem;
}
.acc-content.open{
  height:15rem;
}
.acc-content button{
  margin-top:20px;
  background-color:#3ee8be;
  color:white;
  text-transform:uppercase;
  padding:0.5rem 3rem;
}
.acc i{
  position:absolute;
  right:3%;
  top:50%;
  transform:translate(0,-50%);
}
.acc label{
  display:inline-block;
  width:100%;
}
.acc input[type="checkbox"]{
  position:absolute;
  left:-99rem;
}
.htitle{
  width:85%;
  position:relative;
  font-size:1.4rem;
  letter-spacing:0.2rem;
  margin-top:5%;
  padding-bottom:15px;
  text-align:center;
}
.htitle:after{
  height:1px;
  width:90%;
  background-color:white;
  position:absolute;
  bottom:0;
  left:5%;
  content:'';
}
#don .title2 {
  text-align:left;
  width:75%;
  margin:15px auto 5px;
}
.progress-container{
  width:80%;
  margin:auto auto 40px;
  text-align:left;
}
.barre {
  position:relative;
  background-color:white;
  display:inline-block;
  width:80%;
  height:30px;
  border-radius:5px;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
  vertical-align:middle;
}
.progress{
  z-index:0;
  position:absolute;
  left:0;
  top:0;
  background-color:#ffde6b;
  height:100%;
  border-radius:5px;
}
.progress-amount{
  position:absolute;
  color:#585858;
  opacity:0.8;
  top:50%;
  font-weight:normal;
  left:50%;
  width:100%;
  text-align:center;
  transform:translate(-50%,-50%);
}
.progress-text{
  font-weight:bold;
  vertical-align:middle;
  margin-left:5px;
  font-size:1.2rem;
}
.filtre{
  display:inline-block;
  width:28%;
  margin:10px 1%;
  vertical-align:top;
}
.filtre i{
  display:block;
  font-size:1.2rem;
  margin-bottom:5px;
}
.projet{
  width:80%;
  margin:20px auto;
  padding:1.2rem 1.7rem 1.5rem;
  background-color:white;
  border-radius:8px;
  font-weight:bold;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
  color:#888;
  font-size:0.9rem;
}
.image-container{
  margin:auto;
}
.projet img{
  width:100%;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
  border-radius:5px;
}
.project-title{
  color:#3ee8be;
  margin:15px 0 10px;
  font-size:1.2rem;
}
</style>

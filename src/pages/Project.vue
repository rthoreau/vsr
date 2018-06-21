<template>
  <div id="project" v-if="this.data">
    <button class="back-link" @click="$router.go(-1)"><i class="fa fa-chevron-left"></i> Retour</button>
    <div class="projet">
      <div class="head">
        <img :src="data.pic" alt="">
      </div>
      <p class="project-title">{{data.titre}}</p>
      <p class="desc">{{data.desc}}</p>
    </div>
    <div class="tabs-contents">
      <div class="tabs">
        <label class="tab" :class="tab === '0' ? 'active' : ''">A propos <input type="radio" v-model="tab" value="0"></label>
        <label class="tab" :class="tab === '1' ? 'active' : ''">Partenaires <input type="radio" v-model="tab" value="1"></label>
      </div>
      <div class="tabs-content">
        <div class="tab-content" v-if="tab === '0'">
          {{data.desc}}
        </div>
        <div class="tab-content" v-if="tab === '1'">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odit fugiat illo sequi labore consectetur obcaecati quos laboriosam dolor, nihil, soluta ut in, magni doloremque non ab quo! Veniam, ullam.
        </div>
      </div>
    </div>
    <div class="progress-container">
      <div class="barre">
        <progressval :val="data.progress"></progressval>
        <p class="progress-amount"><load :val="data.progressText"></load></p>
      </div>
      <span class="progress-text">{{data.max}}</span>
    </div>
    <div class="title2">Soutenir le projet</div>
    <amount></amount>

    <div class="title2">Photos</div>
    <div class="medias">
      <div class="img-content">
        <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
        <img src="https://scontent-cdt1-1.cdninstagram.com/vp/af29cde8b164dba0b6ab4ea805584131/5BA59CC7/t51.2885-15/e35/34982646_669303953415306_5444918942390812672_n.jpg" alt="" class="img">
      </div>
      <div class="img-content">
        <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
        <img src="https://scontent-cdt1-1.cdninstagram.com/vp/675df8baf203941ad69336d62d29f82d/5BEA992C/t51.2885-15/s640x640/sh0.08/e35/34669984_1780359908718168_1640782501842518016_n.jpg" alt="" class="img">
      </div>
      <div class="img-content">
        <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
        <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fvp%2F02ed7e877c81e96d3489f99d2411017e%2F5BA30ABE%2Ft51.2885-15%2Fe35%2F35166452_149830445886151_1620333389452148736_n.jpg" alt="" class="img">
      </div>
      <div class="img-content">
        <img src="http://surfrider.alwaysdata.net/img/px.png" alt="">
        <img src="https://scontent-cdt1-1.cdninstagram.com/vp/42608995fde66b52a5613b4956e76e01/5BA5D218/t51.2885-15/e35/35459242_2532877490071493_4310120000749830144_n.jpg" alt="" class="img">
      </div>
    </div>
  </div>
</template>

<script>
import amount from '../components/Amount'
import load from '../components/Load'
import progressval from '../components/ProgressVal'

export default {
  name: 'Project',
  components: {
    amount,
    load,
    progressval
  },
  data () {
    return {
      data: null,
      tab:'0',
      projects: [
        { id:0,
          titre: 'Collecte en bord de mer', 
          pic: 'https://previews.123rf.com/images/american911/american9111503/american911150300325/38431604-pollution-poubelles-le-plastique-et-les-d%C3%A9chets-sur-la-plage-apr%C3%A8s-les-temp%C3%AAtes-d-hiver-la-mer-d-azo.jpg',
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
    }
  },
  props: {
  },
  methods: {
  },
  mounted () {
    this.data = this.projects.filter(p => p.id.toString() === this.$route.params.id)[0];
    this.$emit('nav', 'don');
  },
  beforeDestroy () {
    this.$emit('nav', '');
  }
}
</script>

<style>
#project .projet{
  position:relative;
  z-index:1;
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  margin-bottom:0;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4);
}
.tab{
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  padding: 0 1rem;
  display:inline-block;
  width:50%;
  color:#2ed9cc;
  font-weight:bold;
  padding:1rem 0;
  box-shadow:0 2px 10px rgb(13, 78, 88, 0.4) inset;
  border-bottom-right-radius:8px;
}
.tab + .tab{
  border-bottom-right-radius:0;
  border-bottom-left-radius:8px;
}
.tab input[type="radio"] {
  position:absolute;
  left:-99rem;
}
.tab.active{
  box-shadow:none;
}
.tabs-content{
  padding:2rem;
  color:#888;
}
.tabs-contents{
  display:block;
  background-color:white;
  width:80%;
  margin:auto;
  border-bottom-left-radius:8px;
  border-bottom-right-radius:8px;
  margin-bottom:20px;
}
.title2{
  margin-top:35px;
  font-weight:bold;
  font-size:1.2rem;
}
#project .amount{
  margin:15px 0;
}
#project .amount label{
  color:#3ee8be;
  background-color:white;
}
#project .amount label.selected{
  border-color:white;
  background-color:transparent;
  color:white;
}
#project .free-amount {
  color:white;
}
#project .free-amount label{
  background-color:white;
  border-radius:5px;
  color:#888;
}
.medias{
  width:80%;
  margin:auto;
  text-align:left;
  margin-top:15px;
}
.img-content{
  display:inline-block;
  width:48%;
  position:relative;
  margin-bottom:12px;
}
.img-content:nth-child(2n) {
  margin-left:4%;
}
#project .title2{
  text-transform:uppercase;
}
.img-content img{
  width:100%;
}
.img-content .img{
  position:absolute;
  height:100%;
  top:0;
  left:0;
  border-radius:8px;
  object-fit: cover;
  box-shadow:0 2px 10px rgba(13, 88, 72, 0.2);
}
</style>

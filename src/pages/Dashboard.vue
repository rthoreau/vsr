<template>
  <div id="dashboard">
    <p class="level">lvl . 1</p>
    <p class="title">Surfrider activiste</p>
    <section class="stats">
      <div class="orga"><p>5</p> orga <div class="pic"></div></div>
      <div class="orga"><p>10</p> particip <div class="pic"></div></div>
      <div class="orga"><p>18</p> signali <div class="pic"></div></div>
    </section>
    <section class="badges">
      <div v-for="(b, index) in badges" :key="index" @click="setActive(b)">
        <div class="pic"><img :src="b.pic" alt=""></div>
        <p>{{b.txt}}</p>
      </div>
    </section>
    <div class="popup" v-if="popupVisible">
      <div class="popup-content">
        <div class="pic"><img :src="activeBadge.pic" alt=""></div>
        <p>{{activeBadge.txt}}</p>
      <button @click="popupVisible = false">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data () {
    return {
      popupVisible:false,
      activeBadge: {pic: '', txt: ''},
      badges: [
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum  officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.'},
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntte quo blanditiis illo, aperiam quibusdam ipsa.'},
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente haras. Consequuntur esse impedit hic illo! Satiis illo, aperiam quibusdam ipsa.'},
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.'},
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum dolor sit Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.'},
        {pic: 'https://t3.ftcdn.net/jpg/00/30/70/48/500_F_30704882_xMgzm6N3rBNdmHWP0BKXDa4XFTtrZ6NM.jpg', txt: 'Lorem ipsum dolor sit am. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.'}
      ]
    }
  },
  methods: {
    setActive(badge){
      this.activeBadge = badge;
      this.popupVisible = true
    }
  }
}
</script>

<style>
.popup{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.4);
}
.popup-content{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:80%;
  background-color:white;
}
</style>

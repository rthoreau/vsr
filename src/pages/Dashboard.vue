<template>
  <div id="dashboard">
    <p class="level"><span class="lvl">level</span><span class="lvl_num">01</span></p>
    <p class="title">Surfrider activiste</p>
    <section class="stats">
      <div class="stat"><p>5</p> Organisations <div class="pic"></div></div>
      <div class="stat"><p>10</p> Participations <div class="pic"></div></div>
      <div class="stat"><p>18</p> Signalisations <div class="pic"></div></div>
    </section>
    <section class="badges">
      <p class="title">Badges</p>
      <div v-for="(b, index) in badges" :key="index" @click="setActive(b)" class="badge">
        <div class="pic"><img :src="b.pic" alt=""></div>
        <p>{{b.title}}</p>
      </div>
    </section>
    <div class="popup" v-if="popupVisible" @click="popupVisible = false">
      <div class="popup-content">
        <p class="bravo"><i class="line left"></i> <i class="line left big"></i>Bravo !<i class="line big"></i><i class="line"></i></p>
        <div class="pic"><img :src="activeBadge.pic" alt=""></div>
        <p class="debloc">Tu as débloqué ton premier badge !</p>
        <p class="ptitle">{{activeBadge.title}}</p>
        <p class="discover">Découvre vite les autres badges et monte en niveau</p>
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
        {pic: "http://surfrider.alwaysdata.net/img/badgemoney.svg", txt: 'Lorem ipsum  officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.', title: 'Bébé donateur'},
        {pic: "http://surfrider.alwaysdata.net/img/badge2.svg", txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntte quo blanditiis illo, aperiam quibusdam ipsa.', title: '???'},
        {pic: "http://surfrider.alwaysdata.net/img/badge3.svg", txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente haras. Consequuntur esse impedit hic illo! Satiis illo, aperiam quibusdam ipsa.', title: '???'},
        {pic: "http://surfrider.alwaysdata.net/img/badge4.svg", txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.', title: '???'},
        {pic: "http://surfrider.alwaysdata.net/img/badge5.svg", txt: 'Lorem ipsum dolor sit Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.', title: '???'},
        {pic:  "http://surfrider.alwaysdata.net/img/badge6.svg", txt: 'Lorem ipsum dolor sit am. Corrupti, minus? Perspiciatis sed dignissimos sapiente harum exercitationem officia molestias. Consequuntur esse impedit hic illo! Sapiente quo blanditiis illo, aperiam quibusdam ipsa.', title: '???'}
      ]
    }
  },
  methods: {
    setActive(badge){
      if (badge.title === '???') {
        return;
      }
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
  background:rgba(0,0,0,0.1);
}
.popup-content{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:70%;
  background-color:white;
  padding:1.6rem 3rem;
  color:#ffde6b;
  border-radius:8px;
}
.level{
  margin:1% auto;
  position:relative;
}
.lvl{
  position:absolute;
  font-weight:bold;
  text-transform:uppercase;
  left:52%;
  top:55%;
  transform:translate(-50%, -50%);
  font-size:1.5rem;
  letter-spacing:0.3rem;
}
.lvl_num{
  font-size:9rem;
  font-weight:800;
  opacity:0.25;
  letter-spacing:-0.5rem;
}
#dashboard .title{
  text-align:center;
  font-size:1.2rem;
  letter-spacing:0.3rem;
  margin-top:3%;
}
.stats{
  display:inline-block;
  margin:auto auto 10px;
  border-bottom:1px solid rgba(255,255,255,0.3);
  padding:0 0 20px;
}
.stat{
  display:inline-block;
  color:rgba(255,255,255,0.6);
  font-size:0.8rem;
  margin:15px 10px 0;
}
.stat p{
  font-weight:bold;
  font-size:3rem;
  color:white;
}
.badge {
  vertical-align:top;
  width:20%;
  margin:5%;
  display:inline-block;
  font-size:0.9rem;
}
.badge img{
  width:80px;
  height:80px;
}
.bravo{
  font-weight:bold;
  text-transform:uppercase;
  font-size:1.6rem;
  margin-bottom:15px;
}
.ptitle{
  font-weight:bold;
  font-size:1.2rem;
  margin-bottom:20px;
}
.popup img{
  width:65%;
  margin-bottom:10px;
}
.popup .discover, .popup .debloc{
  color:#30d3d4;
  font-size:0.9rem;
  margin:10px 0;
}
.popup .debloc{
  font-weight:bold;
}
</style>

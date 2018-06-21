<template>
  <div>
    <div class="amount">
        <label :class="amount === '45' ? 'selected' : ''">45 €<input type="radio" v-model="amount" value="45"></label>
        <label :class="amount === '80' ? 'selected' : ''">80 €<input type="radio" v-model="amount" value="80"></label>
        <label :class="amount === '160' ? 'selected' : ''">160 €<input type="radio" v-model="amount" value="160"></label>
        <label :class="amount === '480' ? 'selected' : ''">480 €<input type="radio" v-model="amount" value="480"></label>
      </div>
      <div class="free-amount">
        Ou montant libre <label><input type="number" v-model="amount"> €</label>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Amount',
  data () {
    return {
      amount: 0
    }
  },
  methods: {
  }
}
</script>

<style>
  input[type="radio"] {
    position:absolute;
    left:-999rem;
  }
  .amount label {
    margin-top:10px;
    vertical-align:top;
    width:3.5rem;
    height:3.5rem;
    padding:0.9rem 0;
    text-align:center;
    display:inline-block;
    background-color:#30d4d3;
    border-radius:50%;
    border:2px solid transparent;
    font-weight:bold;
  }
  .amount label.selected{
    border-color:#30d4d3;
    background-color:white;
    color:#30d4d3;
  }
  .amount label + label{
    margin-left:10px;
  }
  .free-amount{
    margin:20px 0;
    color:#888;
  }
  .free-amount label{
    position:relative;
    display:inline-block;
    text-align:center;
    outline:none;
    border:1px solid rgba(136, 136, 136, 0.336);
    padding:0.1rem 1rem 0.1rem 0.5rem;
  }
  .free-amount label:after, .free-amount label:before{
    content:'';
    width:0;
    height:0;
    border:6px solid #30d4d3;
    position:absolute;
    top:50%;
    left:5%;
    transform:translate(-50%, -50%);
    border-color:transparent #30d3d4 transparent transparent;
  }
  .free-amount label:after{
    left:auto;
    right:-5%;
    border-color:transparent transparent transparent #30d3d4;
  }
  .free-amount input{
    width:auto;
    text-align:right;
    color:#888;
    font-size:1rem;
    width:4rem;
    padding:0 0 0 0.5rem;
    outline:none;
    border:none;
  }
</style>

<template>
  <div>
    <div class="amount">
        <label>45 €<input type="radio" v-model="amount" value="45"></label>
        <label>80 €<input type="radio" v-model="amount" value="80"></label>
        <label>160 €<input type="radio" v-model="amount" value="160"></label>
        <label>480 €<input type="radio" v-model="amount" value="480"></label>
      </div>
      <div class="free-amount">
        ou <label>montant libre <input type="number"> €</label>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Amount',
  data () {
    return {
      amount: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>

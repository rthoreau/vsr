<template>
  <span>
    {{Math.round(amount)}}
  </span>
</template>

<script>

export default {
  name: 'Load',
  props: {
    val:true,
  },
  data () {
    return {
      amount: 0,
      inter: 0
    }
  },
  methods: {
  },
  mounted () {
    var self = this;
    var val = parseInt(this.val);
    var drop = val/200;
    function load() {
      self.amount += drop;
      if (self.amount >= val){
        clearInterval(self.inter)
        self.amount = val;
      }
    }
    this.inter = window.setInterval(load, 10);
  }
}
</script>

<style>
</style>

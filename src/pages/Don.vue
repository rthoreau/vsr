<template>
  <div id="don">
    <p class="title">Soutenir un projet</p>

    <div class="projet">
      <div class="image-container"></div>
      <div class="content"></div>
      <div class="progress-container">
        <div class="barre">
          <div class="progress"></div>
          <span class="progress-text">5 020€</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Event',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>

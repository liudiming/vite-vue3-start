<template></template>
<script>
import { defineComponent } from '@vue/composition-api'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res:', res)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
})
</script>
<style lang="stylus"></style>

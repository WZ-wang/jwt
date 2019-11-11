<template>
  <div id="app">
    <div id="nav">
      <Index></Index>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Index from "./views/Index"
export default {
  components:{
    Index
  }
}
</script>
<style>
</style>

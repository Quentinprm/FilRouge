<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Detail from './components/Detail'
export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
#app {
  display: flex;
}
</style>

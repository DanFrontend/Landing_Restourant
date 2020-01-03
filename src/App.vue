<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <PopularDishes />
      <MenuDish />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import PopularDishes from './components/PopularDishes.vue';
  import MenuDish from './components/MenuDish';
  import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {MenuDish, Header, PopularDishes, Footer}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto Slab', serif;
  text-align: center;
  /* color: #2c3e50; */
  background: #0e0e0e;
}
  .wrapper {
    max-width: 1245px;
    margin: 0 auto;
  }
</style>

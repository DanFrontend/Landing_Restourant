<template>
  <div class="header">
    <button @click="modal = true" class="reserved">Забронировать стол</button>
    <div @click="modal = false" class="modal" :class="{'show' : modal}"></div>
    <ul class="header__menu">
      <li><a href="#salad">Салаты</a></li>
      <li><a href="#meat">Мясо</a></li>
      <li><a href="#alcohol">Алкоголь</a></li>
      <li><a href="#desert">Десерт</a></li>
    </ul>
    <img src="../assets/img/border.jpeg" class="borderImg">
    <b-carousel
            id="carousel-fade"
            style="text-shadow: 0 0 2px #000"
            fade
            indicators
            img-width="512"
            img-height="240"
    >
      <b-carousel-slide
              caption="First slide"
              img-src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>
      <b-carousel-slide
              caption="Second Slide"
              img-src="https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>
      <b-carousel-slide
              caption="Third Slide"
              img-src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>
        <b-carousel-slide
              caption="Third Slide"
              img-src="https://images.pexels.com/photos/954199/pexels-photo-954199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>
    </b-carousel>
    <modal-reserved v-if="modal" />
  </div>
</template>

<script>
import ModalReserved from './ModalReserved'

export default {
  name: 'Header',
  components: {ModalReserved},
  data() {
    return {
      modal: false
    }
  }
}
</script>


<style scoped lang="scss">

  .header {
    background-image: url('../assets/img/headBackg.jpg');
    background-repeat: no-repeat;
    background-position-x: center;

    &__menu {
      list-style: none;
      padding: 0;
      display: flex;
      max-width: 1200px;
      margin: 0 auto 277px auto;
      justify-content: center;

      & li {
        padding: 20px;
      }
        
      & a {
        color: #81848b;
        text-decoration: none;
        font-family: 'Roboto Slab', serif;
        font-size: 17px;
        font-weight: 500;
      }
    }
  }
  .borderImg {
    width: 100%;
  }
  .reserved {
    position: fixed;
    top: 20px;
    right: 10px;
    background: rgba($color: #000000, $alpha: .5);
    color: #FFF;
    z-index: 2;
    border-radius: 5px;
    outline: none;
    border: 1px solid #FFF;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: rgba($color: #000000, $alpha: .8);
    }
  }
  .modal {
    background: rgba($color: #000000, $alpha: .7);
    &.show {
      display: block;
    }
  }
</style>

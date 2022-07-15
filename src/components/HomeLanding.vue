<template>
  <div class="hellow">
    <section class="home">

      <div class="swiper home-slider" ref="homeSlider">

        <div class="swiper-wrapper" ref="carouselWrapper">
          <!--  -->
          <div class="swiper-slide slide">
            <div class="content">
              <span>pídelo online</span>
              <h3>pollo a la brasa</h3>
              <a href="/menu" class="btn">ver menus</a>
            </div>
            <div class="image">
              <img src="../assets/images/home-img-3.png" alt="">
            </div>
          </div>
          <!--  -->
          <div class="swiper-slide slide">
            <div class="content">
              <span>pídelo online</span>
              <h3>combos de hamburguesa</h3>
              <a href="/menu" class="btn">ver menus</a>
            </div>
            <div class="image">
              <img src="../assets/images/home-img-2.png" alt="">
            </div>
          </div>
          <!--  -->
          <div class="swiper-slide slide">
            <div class="content">
              <span>pídelo online</span>
              <h3>pizzas deliciosas</h3>
              <a href="/menu" class="btn">ver menus</a>
            </div>
            <div class="image">
              <img src="../assets/images/home-img-1.png" alt="">
            </div>
          </div>

        </div>

        <div class="swiper-pagination"></div>

      </div>

    </section>

    <section class="category">

      <h1 class="title">Nuestras Categorias</h1>

      <div class="box-container">

        <a href="/category" class="box">
          <img src="../assets/images/cat-1.png" alt="">
          <h3>comida rápida</h3>
        </a>

        <a href="/category" class="box">
          <img src="../assets/images/cat-2.png" alt="">
          <h3>platos principales</h3>
        </a>

        <a href="/category" class="box">
          <img src="../assets/images/cat-3.png" alt="">
          <h3>bebidas</h3>
        </a>

        <a href="/category" class="box">
          <img src="../assets/images/cat-4.png" alt="">
          <h3>postres</h3>
        </a>
      </div>

    </section>

    <section class="products">

      <h1 class="title">Nuestros Platos</h1>

      <div class="box-container">

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/pizza-1.png" alt="">
          <a href="/category" class="cat">comida rápida</a>
          <div class="name">pizza 3 quesos 01</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span>s</div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/dish-1.png" alt="">
          <a href="/category" class="cat">platos principales</a>
          <div class="name">pasta al dente 01</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span></div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/burger-1.png" alt="">
          <a href="/category" class="cat">comida rápida</a>
          <div class="name">hamburguesa de queso 01</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span></div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/dessert-1.png" alt="">
          <a href="/category" class="cat">postres</a>
          <div class="name">fresas con crema 01</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span></div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/drink-1.png" alt="">
          <a href="/category" class="cat">bebidas</a>
          <div class="name">jugo natural 01</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span></div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>

        <div class="box">
          <a href="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </a>
          <a href="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </a>
          <img src="../assets/uploaded_img/dish-2.png" alt="">
          <a href="/category" class="cat">platos principales</a>
          <div class="name">pollo frito 02</div>
          <div class="flex">
            <div class="price"><span>$</span>3<span>/-</span></div>
            <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          </div>
        </div>
      </div>

      <div class="more-btn">
        <!-- <a href="/menu" class="btn">ver todos</a> -->
        <router-link class="btn" to="/menu">ver todos</router-link>
      </div>

    </section>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<script>
  import Swiper, { Pagination, EffectFlip } from 'swiper';
  Swiper.use([Pagination, EffectFlip]);

  // Import Swiper styles
  // import "swiper/swiper-bundle.min.css";

  export default {
    name: 'HomeLanding',
    props: {
     msg: String
    },
    components: {
      Swiper,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        homeSlider: null,
        carouselOptions: {
          loop:true,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          effect: 'flip',
          flipEffect: {
            slideShadows: false,
          },
        },
      };
    },
    methods: {
      initCarousel() {
          this.homeSlider = new Swiper(this.$refs.homeSlider, this.carouselOptions);
      },
    },
    mounted () {
      this.initCarousel();
    },
  }
</script>

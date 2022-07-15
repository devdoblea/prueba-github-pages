<template>
  <div class="heading">
    <h3>nosotros</h3>
    <p><a href="/">inicio </a> <span> / nosotros</span></p>
  </div>

  <section class="about">

    <div class="row">

      <div class="image">
        <img src="../assets/images/about-img.svg" alt="">
      </div>

      <div class="content">
        <h3>por qué elegirnos?</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis non odit nihil, doloremque sunt aut placeat culpa. Adipisci minima, neque necessitatibus incidunt nemo eveniet mollitia quis facere vel consectetur culpa?</p>
        <a href="/landing/menu" class="btn">nuestro menu</a>
      </div>

    </div>

  </section>

  <section class="steps">

    <h1 class="title">pídelo en 3 simples pasos</h1>

    <div class="box-container">

      <div class="box">
        <img src="../assets/images/step-1.png" alt="">
        <h3>Selecciona tu comida</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
      </div>

      <div class="box">
        <img src="../assets/images/step-2.png" alt="">
        <h3>despachamos en 30 minutos</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
      </div>

      <div class="box">
        <img src="../assets/images/step-3.png" alt="">
        <h3>disfruta tu comida!</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, hic.</p>
      </div>

    </div>

  </section>

  <section class="reviews">

    <h1 class="title">qué dicen nuestros clientes?</h1>

    <div class="swiper reviews-slider" ref="homeSlider">

      <div class="swiper-wrapper" ref="carouselWrapper">

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-1.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-2.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-3.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-4.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-5.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

        <div class="swiper-slide slide">
          <img src="../assets/images/pic-6.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo exercitationem ullam esse quia iusto in.</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>john doe</h3>
        </div>

      </div>

      <div class="swiper-pagination"></div>

    </div>

  </section>
</template>

<script>
  import Swiper, { Pagination, EffectFlip } from 'swiper';
  Swiper.use([Pagination, EffectFlip]);

  // Import Swiper styles
  // import "swiper/swiper-bundle.min.css";

  export default {
    name: 'AboutPage',
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
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
          },
          breakpoints: {
            550: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
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

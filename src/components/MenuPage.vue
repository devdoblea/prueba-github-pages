<template>
  <div class="heading">
    <h3>nuestro menu</h3>
    <p><a href="/">inicio </a> <span> / menu</span></p>
  </div>

  <section class="products">

    <h1 class="title">platos populares</h1>

    <div class="box-container">

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/pizza-1.png" alt="">
        <router-link to="/category" class="cat">comida rápida</router-link>
        <div class="name">pizza doble queso 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/images/home-img-3.png" alt="">
        <router-link to="/category" class="cat">pollos</router-link>
        <div class="name">pollo a la broster 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/burger-1.png" alt="">
        <router-link to="/category" class="cat">comida rápida</router-link>
        <div class="name">hamburger capitán 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/dessert-1.png" alt="">
        <router-link to="/category" class="cat">postres</router-link>
        <div class="name">fresas con cremas 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/drink-1.png" alt="">
        <router-link to="/category" class="cat">bebidas</router-link>
        <div class="name">jugos naturales 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/dish-2.png" alt="">
        <router-link to="/category" class="cat">pollos</router-link>
        <div class="name">pasta con vegetales 02</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/burger-2.png" alt="">
        <router-link to="/category" class="cat">comida rápida</router-link>
        <div class="name">Papáburger 02</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/pizza-2.png" alt="">
        <router-link to="/category" class="cat">comida rápida</router-link>
        <div class="name">pizza maracucha 02</div>
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

      <form accept="" method="post" class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <router-link to="/add_to_cart"> <i class="fas fa-cart-plus fa-2xs"></i> </router-link>
        <img src="../assets/uploaded_img/dessert-2.png" alt="">
        <router-link to="/category" class="cat">postres</router-link>
        <div class="name">torta de ahuyama 02</div  >
        <div class="flex">
          <div class="price"><span>$</span>3<span>/-</span></div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
        </div>
      </form>

    </div>

  </section>
</template>


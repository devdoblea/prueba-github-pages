<template>
  <div class="heading">
    <h3>Shopping Cart</h3>
    <p><router-link to="/"> inicio </router-link> <span> / carrito</span></p>
  </div>

  <section class="products">

    <h1 class="title">tu carrito</h1>

    <div class="cart-total">
      <p>gran total : <span>$9/-</span></p>
      <router-link class="btn" to="/checkout">pagar tu pedido</router-link>
    </div>

    <div class="box-container">

      <div class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <button type="submit" name="delete" onclick="return confirm('delete this item?')"> <i class="fad fa-times"></i> </button>
        <img src="../assets/uploaded_img/pizza-1.png" alt="">
        <div class="name">pizza 3 quesos 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3</div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          <button type="submit" class="fas fa-edit"></button>
        </div>
        <div class="sub-total">sub total : <span>$3</span></div>
      </div>

      <div class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <button type="submit" name="delete" onclick="return confirm('delete this item?')"> <i class="fad fa-times"></i> </button>
        <img src="../assets/uploaded_img/dish-2.png" alt="">
        <div class="name">pasta al dente 02</div>
        <div class="flex">
          <div class="price"><span>$</span>3</div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          <button type="submit" class="fas fa-edit"></button>
        </div>
        <div class="sub-total">sub total : <span>$3</span></div>
      </div>

      <div class="box">
        <router-link to="/quick_view"> <i class="fas fa-eye fa-2xs"></i> </router-link>
        <button type="submit" name="delete" onclick="return confirm('delete this item?')"> <i class="fad fa-times"></i> </button>
        <img src="../assets/uploaded_img/dessert-1.png" alt="">
        <div class="name">fresas con crema 01</div>
        <div class="flex">
          <div class="price"><span>$</span>3</div>
          <input type="number" name="qty" class="qty" min="1" max="99" value="1" onkeypress="if(this.value.length == 2) return false;">
          <button type="submit" class="fas fa-edit"></button>
        </div>
        <div class="sub-total">sub total : <span>$3</span></div>
      </div>

    </div>

    <div class="more-btn">
      <a href="#" class="delete-btn" onclick="return confirm('delete all from cart?');">borrar todo</a>
    </div>

  </section>
</template>

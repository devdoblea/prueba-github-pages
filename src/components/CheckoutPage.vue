<template>
  <div class="heading">
    <h3>registra tu pago</h3>
    <p><a href="/">inicio </a> <span> / pagar</span></p>
  </div>

  <section class="checkout">

    <h1 class="title">sumario del pedido</h1>

    <form action="" method="post">
      <div class="cart-items">
        <h3>items solicitados</h3>
        <p><span class="name">pizza 3 quesos 01</span><span class="price">$3</span></p>
        <p><span class="name">pollo frito 02</span><span class="price">$3</span></p>
        <p><span class="name">fresas con crema 01</span><span class="price">$3</span></p>
        <p class="grand-total"><span class="name">gran total :</span> <span class="price">$9</span></p>
        <a href="/cart" class="btn">ver carrito</a>
      </div>
      <div class="user-info">
        <h3>tu info</h3>
        <p><i class="fas fa-user"></i> <span>pablo perez</span></p>
        <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
        <p><i class="fas fa-envelope"></i> <span>pabloperez69@gmail.com</span></p>
        <a href="/update_profile" class="btn">actualizar info</a>
        <h3>dirección de entrega</h3>
        <p class="address"><i class="fas fa-map-marker-alt"></i> <span>calle 18 con carrera 16 edificio los palomares vereda del norte mazathlan</span></p>
        <a href="/update_address" class="btn">actualizar dirección</a>
        <select name="method" class="box" required>
          <option value="" disabled selected>seleciona metodo de pago</option>
          <option value="delivery">pago al delivery</option>
          <option value="caja">pago en caja (retirar en el local)</option>
          <option value="reserve">RESERVE</option>
          <option value="zelle">ZELLE</option>
          <option value="efectivo">EFECTIVO (VED)</option>
          <option value="dolares">DOLARES (USD)</option>
        </select>
      </div>
      <input type="submit" value="enviar pedido" name="order" class="btn order-btn">
    </form>

  </section>

</template>

<script>
  export default {
    name: 'CheckoutPage',

    data() {
      return {
      };
    },
  }
</script>

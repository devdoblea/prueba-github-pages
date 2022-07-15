<template>
  <section class="form-container">

    <form action="" method="post">
      <h3>tu dirección</h3>
      <input type="text" maxlength="50" placeholder="punto de referencia" required class="box" name="flat">
      <input type="text" maxlength="50" placeholder="calle / avenida" required class="box" name="street">
      <input type="text" maxlength="50" placeholder="ciudad" required class="box" name="city">
      <input type="text" maxlength="50" placeholder="estado" required class="box" name="state">
      <input type="text" maxlength="50" placeholder="pais" required class="box" name="country">
      <input type="number" min="0" max="999999" placeholder="pin code" required class="box" name="pin_code" onkeypress="if(this.value.length == 6) return false;">
      <input type="submit" value="guardiar dirección" name="submit" class="btn">
    </form>

  </section>
  
</template>

<script>
  export default {
    name: 'UpdateAddressPage',

    data() {
      return {
      };
    },
  }
</script>

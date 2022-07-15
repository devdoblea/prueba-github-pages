<template>
  <div class="heading">
    <h3>contactanos</h3>
    <p><router-link to="/">inicio</router-link> <span> / contactanos</span></p>
  </div>

  <section class="contact">

    <div class="row">

      <div class="image">
        <img src="../assets/images/contact-img.svg" alt="">
      </div>

      <form action="" method="post">
        <h3>comentanos tu experiencia con nosotros!</h3>
        <input type="text" name="name" required placeholder="escribe tu nombre" maxlength="50" class="box">
        <input type="number" name="number" required placeholder="tu teléfono" max="9999999999" min="0" class="box" onkeypress="if(this.value.length == 10) return false;">
        <input type="email" name="email" required placeholder="tu email" maxlength="50" class="box">
        <textarea name="msg" placeholder="escribe tu mensaje" required class="box" cols="30" rows="10" maxlength="500"></textarea>
        <input type="submit" value="enviar" class="btn" name="send">
      </form>

    </div>

  </section>
</template>

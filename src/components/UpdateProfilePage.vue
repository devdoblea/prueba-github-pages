<template>
  <section class="form-container">

    <form action="" method="POST">
      <h3>editar perfil</h3>
      <input type="text" required maxlength="20" name="name" placeholder="escribe tu nombre" class="box" oninput="this.value = this.value.replace(/\s/g, '')" value="pablo">
      <input type="email" required maxlength="50" name="email" placeholder="escribe tu email" class="box" oninput="this.value = this.value.replace(/\s/g, '')" value="pabloperez@gmai.com">
      <input type="numner" min="0" max="9999999999" onkeypress="if(this.value.length == 10) return false;" placeholder="enter your number" required class="box" name="number" value="1234567890">
      <input type="password" maxlength="20" name="old_pass" placeholder="escribe la contraseña anterior" class="box" oninput="this.value = this.value.replace(/\s/g, '')">
      <input type="password" maxlength="20" name="new_pass" placeholder="escribe la contraseña nueva" class="box" oninput="this.value = this.value.replace(/\s/g, '')">
      <input type="password" maxlength="20" name="confirm_pass" placeholder="confirma la contraseña nueva" class="box" oninput="this.value = this.value.replace(/\s/g, '')">
      <input type="submit" value="actualizar" class="btn" name="submit">
    </form>

  </section>
  
</template>

<script>
  export default {
    name: 'UpdateProfilePage',

    data() {
      return {
      };
    },
  }
</script>

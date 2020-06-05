<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      Desculpe, nada foi encontrado aqui... <strong>(404)</strong>
    </p>
    <q-btn
      color="primary"
      style="width:200px;"
      to="/"
      label="Voltar"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error404'
})
</script>

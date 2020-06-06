<template>
  <q-layout view="lHh LpR lFf">

    <q-header reveal bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/simbolo.png">
          </q-avatar>
          <b>    Avuá Libras</b> Site Oficial
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/page1" label="Página Inicial" />
        <q-route-tab to="/page2" label="Quadros" />
        <q-route-tab to="/page3" label="Quem somos" />
        <q-route-tab to="/page3" label="Cursos" />
        <q-route-tab to="/page3" label="Agenda" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-secondary">
      <q-toolbar>
        <q-toolbar-title>
          © 2020 Avuá Libras - Site Oficial. Todos os direitos reservados.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
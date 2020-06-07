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
        <q-route-tab to="/" label="Página Inicial" />
        <q-route-tab to="/Quadros" label="Quadros" />
        <q-route-tab to="/QuemSomos" label="Quem Somos" />
        <q-route-tab to="/Cursos" label="Cursos" />
        <q-route-tab to="/Agenda" label="Agenda" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->

    <template>
        <div class="q-pa-md q-gutter-sm" style="font-size: 1em">
            <q-breadcrumbs gutter="sm">
            <q-icon name="font_download" />
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Components" />
            <q-breadcrumbs-el label="Breadcrumbs" />
            </q-breadcrumbs>
            
            <q-separator />
        
        </div>
    </template>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-secondary">
      <q-toolbar>
        <div class="text-weight-bold" style="font-size: 1em"> 
          © 2020 Avuá Libras - Site Oficial. Todos os direitos reservados.
        </div>
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
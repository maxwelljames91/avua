<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
       <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
<q-btn color="primary" label="MENU">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
            <q-item-section>CURSOS</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>NOSSOS TRABALHOS</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>QUEM SOMOS</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        <q-toolbar-title>

        </q-toolbar-title>

        <div>SPA Version 1.7 .</div>
        <q-avatar>
      <img src="~assets/simbolo.png">
    </q-avatar>

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links Essenciais
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"

        />

       </q-list>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Instagram AVUA Libras',
          caption: 'instagram.com',
          icon: 'favorite',
          link: 'https://www.instagram.com/avualibras/'
        },
        {
          title: 'Canal AVUA Youtube',
          caption: 'youtube.com',
          icon: 'play_circle_filled',
          link: 'https://www.youtube.com/channel/UCJLKeaVEGmvDj0pWMcGyz8w?app=desktop'
        },
         {
          title: 'Facebook AVUA',
          caption: 'facebook.com',
          icon: 'thumb_up',
          link: '#'
        },
        {
          title: 'avua.ac@gmail.com',
          caption: 'Gmail',
          icon: 'mail',
          link: '#'
          }
      ]
    }
  }
}
</script>

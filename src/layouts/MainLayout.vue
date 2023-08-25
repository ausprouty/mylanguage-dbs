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
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Our Language
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
         Setup Tasks
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
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
{
    title: 'Our Languages',
    icon: 'settings',
    link: '/language'
  },
{
    title: 'Life Principles',
    icon: 'school',
    link: '/life/eng00/afk00/1'
  },
  {
    title: 'God\'s Rescue Plan',
    icon: 'school',
    link: '/dbs/eng00/afk00/1'
  },
  {
    title: 'JESUS Film',
    icon: 'school',
    link: '/video/eng00/afk00/1'
  },
  {
    title: 'Gospel Outline',
    icon: 'school',
    link: '/gospel/eng00/afk00/'
  },
  {
    title: 'Other Resources',
    icon: 'school',
    link: 'https://mylanguage.net.au'
  },
  {
    title: 'How to lead a DBS',
    icon: 'school',
    link: '/lead'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

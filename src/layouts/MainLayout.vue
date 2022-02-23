<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="small-screen-only">
        <q-toolbar-title class="text-catscratch align-center">
          <img
            src="~assets/kittyWalkW.png"
            style="height: 2em; max-width: 2em; padding-top: 0.4em"
          />

          kittStagram
        </q-toolbar-title>
      </q-toolbar>
      <div class="row no-wrap shadow-1">
        <q-toolbar class="col-9 large-screen-only">
          <q-toolbar-title class="text-catscratch">
            <img
              src="~assets/kittyWalkW.png"
              style="height: 2em; max-width: 2em; padding-top: 0.4em"
            />
            kittStagram
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-3 large-screen-only align-right">
          <q-btn
            to="/"
            flat
            dense
            color="white"
            icon="pets"
            class="q-pt-sm q-mr-xs"
            size="18px"
          />
          <q-btn
            to="/camera"
            flat
            dense
            color="white"
            icon="local_see"
            class="q-pt-sm"
            size="18px"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white small-screen-only">
      <q-tabs
        align="center"
        active-bg-color="secondary"
        indicator-color="transparent"
      >
        <q-route-tab to="/" icon="pets" />
        <q-route-tab to="/Camera" icon="local_see" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>

<style lang="sass">
.align-right
  text-align: right
.align-center
  text-align: center
.q-footer
  .q-tab__icon
    font-size: 40px
</style>

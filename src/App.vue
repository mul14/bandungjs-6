<template>
  <div class="container-fluid my-5">

    <div class="row">
      <aside class="col-3">

        <router-link :to="{ name: 'home' }" class="lead mb-2 d-block">
          BandungJS #6 - The Great
          <img src="/static/vue-logo.png" alt="" class="img-fluid" width="30">
        </router-link>

        <nav>
          <!-- Slide -->
          <router-link :to="{ name: 'what' }" :class="routerLink"> What is Vue.js? </router-link>
          <router-link :to="{ name: 'history' }" :class="routerLink"> History </router-link>
          <router-link :to="{ name: 'upcoming' }" :class="routerLink"> Upcoming </router-link>
          <router-link :to="{ name: 'current' }" :class="routerLink"> Current State </router-link>

          <!-- Demo -->
          <div class="lead mt-5">Demo</div>
          <router-link :to="{ name: 'single' }" :class="routerLink"> Single File Component </router-link>
          <router-link :to="{ name: 'html' }" :class="routerLink"> Html </router-link>
          <router-link :to="{ name: 'style' }" :class="routerLink"> Style Sheets </router-link>
          <router-link :to="{ name: 'coffee' }" :class="routerLink"> CoffeeScript </router-link>
          <router-link :to="{ name: 'jsx' }" :class="routerLink"> JSX </router-link>
          <router-link :to="{ name: 'data' }" :class="routerLink"> $data </router-link>
          <router-link :to="{ name: 'lifecycle' }" :class="routerLink"> Life Cycle </router-link>
          <router-link :to="{ name: 'two' }" :class="routerLink"> Two-way data binding </router-link>
          <router-link :to="{ name: 'method' }" :class="routerLink"> Event Listener </router-link>
          <router-link :to="{ name: 'filter' }" :class="routerLink"> Filter </router-link>
          <router-link :to="{ name: 'computed' }" :class="routerLink"> Computed Properties </router-link>
          <router-link :to="{ name: 'watcher' }" :class="routerLink"> Watcher </router-link>
          <router-link :to="{ name: 'props' }" :class="routerLink"> Props </router-link>
          <router-link :to="{ name: 'bus' }" :class="routerLink"> Bus </router-link>
          <router-link :to="{ name: 'vuex' }" :class="routerLink"> Vuex </router-link>
          <router-link :to="{ name: 'deploy' }" :class="routerLink"> Deploy </router-link>

        </nav>

      </aside>
      <div class="col-9">
        <div style="background: white; border: 1px solid #f0f0f0;" class="p-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      routerLink: ['btn', 'btn-outline-secondary', 'btn-block', 'mt-1', 'text-left']
    }
  }
}
</script>

<style scoped>
a.lead {
  text-decoration: none;
  color: #333;
}

nav a {
  border: 1px solid transparent;
  color: #8c8c8c;
}

nav a:hover,
nav a.router-link-active {
  color: white;
  background-color: #47b784;
  border: 1px solid #47b784;
}

nav {
  overflow: auto;
  height: 100vh;
}
</style>

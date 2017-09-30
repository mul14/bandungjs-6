<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">vuex</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Vuex.vue</code> file</div>

    <div class="mb-5 text-muted">
      Open Vue Developer Tools, choose Vuex tab.
    </div>

    <h2 style="font-weight: lighter; color: #47b784;">increment/decrement</h2>
    <div class="my-5">
      <button class="btn btn-success" @click="decrement(13)">-13</button>
      <button class="btn btn-success" @click="decrement(35)">-35</button>
      <span class="lead bg-light px-5 py-3">{{ counter }}</span>
      <button class="btn btn-success" @click="increment(22)">+22</button>
      <button class="btn btn-success" @click="increment(49)">+49</button>
    </div>

    <h2 style="font-weight: lighter; color: #47b784;">show/hide</h2>
    <div class="my-5">
      <button class="btn btn-success" @click="toggle">
        <span v-if="!isShow">Click to show</span>
        <span v-else>Click to hide</span>
      </button>

      <h4 v-if="isShow" class="d-inline ml-5">Vue is super awesome!</h4>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VuexComponent',

  computed: {
    counter: {
      get() { return this.$store.state.counter },
      set(value) { return this.$store.commit('updateCounter', value) }
    },
    isShow: {
      get() { return this.$store.state.isShow },
      set(value) { return this.$store.dispatch('toggle') }
    }
  },

  methods: {
    increment(val) { this.counter = this.counter + val },
    decrement(val) { this.counter = this.counter - val },
    toggle() { this.isShow = ! this.isShow },
  }
}
</script>

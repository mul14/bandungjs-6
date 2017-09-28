<template>
  <div>
    <h1 class="mb-5" style="font-weight: lighter; color: #47b784;">event listener</h1>
    <hr>

    <div class="my-5">
      <button @click="clickHandler" class="btn btn-outline-success">Click me</button>
    </div>

    <div class="my-5">
      <input
        type="text"
        @keyup.enter="pressEnter"
        @keyup.space="pressSpace"
        class="form-control">
    </div>

    <ul>
      <li v-for="log in logs">
        {{ log }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Method',

    data() {
      return {
        logs: []
      }
    },

    methods: {
      clickHandler() {
        window.alert('I am clicked!')
      },

      pressEnter() {
        this.logs.unshift(new Date().toISOString().slice(11, 19) + ' - Enter key has been pressed')
      },

      pressSpace() {
        this.logs.unshift(new Date().toISOString().slice(11, 19) + ' - Space key has been pressed')
      },
    }
  }
</script>

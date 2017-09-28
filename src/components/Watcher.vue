<template>
  <div>
    <h1 class="mb-3" style="font-weight: lighter; color: #47b784;">watcher</h1>
    <hr>

    <input type="text" class="form-control" v-model="message" placeholder="Type a message and then check the dev console">
  </div>
</template>

<script>
export default {
  name: 'Watcher',

  data() {
    return {
      message: ''
    }
  },

  watch: {
    message(val, oldVal) {
      console.info('New Value:', val);
      console.info('Old Value:', oldVal);
    },
  }
}
</script>

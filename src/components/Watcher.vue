<template>
  <div>
    <h1 class="mb-3" style="font-weight: lighter; color: #47b784;">watcher</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Watcher.vue</code> file</div>

    <div class="form-group">
      <input type="text" class="form-control" v-model="message" placeholder="Type a message">
      <div class="text-muted">Open Developer Console, watch the new value and old value.</div>
    </div>
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

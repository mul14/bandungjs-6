<template>
  <div style="padding: 40px; background: #f0f0f0;">
    <h3 style="font-weight: lighter; color: #666;">Hello I am a ChildComponent</h3>

    <dl>
      <dt>I got this data from my parent</dt>
      <dd v-for="movie in list" :key="movie">
        {{ movie }}
      </dd>
    </dl>

    <div>
      <div class="input-group">

        <input type="text" class="form-control" v-model="message" placeholder="Type a message">
        <span class="input-group-btn">

          <button @click="call" class="btn btn-secondary">Send message to my parent</button>

        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],

  data() {
    return {
      message: '',
    }
  },

  methods: {
    call() {
      this.$emit('update:message', this.message)
      this.message = ''
    }
  }
}
</script>



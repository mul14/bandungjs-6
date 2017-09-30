<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">filter</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Filter.vue</code> file</div>

    <div class="form-group">
      <input type="text" v-model="message" class="form-control" placeholder="Type a message">
    </div>

    <div class="my-3 lead">
      <span class="text-muted mr-3">Lowercase</span> {{ message | lowercase }}
    </div>

    <div class="my-3 lead">
      <span class="text-muted mr-3">Uppercase</span> {{ message | uppercase }}
    </div>

    <div class="my-3 lead">
      <span class="text-muted mr-3">Prefix</span> {{ message | prefix('Rp ') }}
    </div>

    <div class="my-3 lead">
      <span class="text-muted mr-3">Suffix</span> {{ message | suffix(' IDR') }}
    </div>

    <div class="my-3 lead">
      <span class="text-muted mr-3">Combination</span> {{ message | lowercase | prefix('Vue ') }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'Filter',

  data() {
    return {
      message: ''
    }
  },

  filters: {
    uppercase(val) { return val.toUpperCase() },
    lowercase(val) { return val.toLowerCase() },
    prefix(val, prefix) { return prefix + val },
    suffix(val, suffix) { return val + suffix },
  }
}
</script>

<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">component life cycle</h1>
    <hr>

    <img src="/bandungjs-6/static/lifecycle.png" alt="" class="img-fluid">

  </div>
</template>

<script>
  export default {
    beforeCreate() {
      // alert('Before create')
    },
    created() {
      // alert('Created')
    },
    beforeMount() {
      // alert('Before mount')
    },
    mounted() {
      // alert('mounted')
    },
  }
</script>

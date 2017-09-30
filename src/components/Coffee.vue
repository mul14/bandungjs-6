<script lang="coffee">
export default {

  mounted: ->
    console.log "Let's drink a cup of coffee!"

  methods: {
    hello: ->
      window.alert "Let's drink a cup of coffee!"
  }

}
</script>


<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">coffee script</h1>
    <hr>
    <div class="lead text-muted">Check the <code>src/components/Coffee.vue</code> file</div>
    <button @click="hello" class="btn btn-outline-success">Click me</button>
  </div>
</template>

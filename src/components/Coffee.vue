<script lang="coffee">
export default {

  mounted: ->
    window.alert "Let's drink a cup of coffee!"

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
    <button @click="hello">Click me</button>
  </div>
</template>

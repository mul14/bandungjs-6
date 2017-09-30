<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">Style</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Style.vue</code> and also <code>src/components/StyleChild.vue</code> file</div>

    <div class="lead my-5">
      <div>
        The parent component got an affect from the child component, because they use same CSS class name.
        Just add <code>&lt;style scoped&gt;</code> to solve this issue.
      </div>
    </div>

    <h1 class="blue">Biru</h1>
    <h1 class="red">Merah</h1>
    <h1 class="green">Hijau</h1>
    <h1 class="gold">Gold</h1>

    <style-child></style-child>
  </div>
</template>

<style>
h1 {
  color: white;
  padding: 5px;
}
.blue {
  background: #1868e6;
}
.red {
  background: #ff3333;
}
.green {
  background: #43c43c;
}
.gold {
  background: gold;
}
</style>

<script>
  import StyleChild from './StyleChild'
  export default {
    name: 'Style',

    components: {
      StyleChild,
    }
  }
</script>

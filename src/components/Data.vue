<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">show data</h1>
    <hr>

    <div class="row">

      <div class="col-6"><pre>{{ $data }}</pre></div>
      <div class="col-6">
        <ul>
          <li v-for="item in items">{{  item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Data',

  data() {
    return {
      items: [
        { name: 'Apel' },
        { name: 'Orange' },
        { name: 'Durian' },
        { name: 'Rambutan' },
        { name: 'Timun' },
      ]
    }
  }
}
</script>

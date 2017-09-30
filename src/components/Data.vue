<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">$data</h1>
    <hr>

    <div class="lead">
      <div>Use <code>$data</code> to show all of your data.</div>
      <div class="text-muted">
        Open Vue developer tools, choose <code>&lt;Data&gt;</code> component,
        open console, now you can use <code>$vm0</code> to access your component.
      </div>
    </div>

    <div class="row">

      <div class="col-6"><pre>{{ $data }}</pre></div>
      <div class="col-6">
        <ul>
          <li v-for="(item, index) in items" :key="index">{{  item.name }}</li>
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

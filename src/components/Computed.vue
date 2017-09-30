<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">computed properties</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Computed.vue</code> file</div>

    <div class="form-group">
      <input type="text" v-model="search" class="form-control" placeholder="Type something filter the list">
    </div>

    <ul>
      <li v-for="item in filteredItemList">
        {{ item.name }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'ComputedProperties',

  data() {
    return {
      search: '',
      items: [
        { name: 'Apel' },
        { name: 'Orange' },
        { name: 'Durian' },
        { name: 'Rambutan' },
        { name: 'Timun' },
        { name: 'Pisang' },
        { name: 'Nangka' },
        { name: 'Pepaya' },
        { name: 'Semangka' },
      ]
    }
  },

  computed: {
    filteredItemList() {
      return this.items.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    }
  }
}
</script>

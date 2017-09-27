<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">computed properties</h1>
    <hr>

    <div class="form-group">
      <input type="text" v-model="search" class="form-control" placeholder="Type a search">
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

<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">props</h1>
    <hr>

    <div class="my-4 lead">Message from ChildComponent: {{ childMessage }}</div>

    <div class="my-4 lead">
      <dl>
        <dt>Parent data</dt>
        <dd>
          <input
            type="text"
            class="form-control"
            v-model.trim="newItem"
            @keyup.enter="add"
            placeholder="Type something and press enter"
          />
        </dd>
        <dd v-for="item in items">
          <button class="btn btn-sm btn-outline-secondary" @click="remove(item)">&times;</button>
          {{ item }}
        </dd>
      </dl>
    </div>

    <child-component
      :list="items"
      @update:message="showMessage"
    ></child-component>
  </div>
</template>

<script>
import ChildComponent from './Props/ChildComponent'

export default {
  components: {
    ChildComponent
  },

  data() {
    return {
      newItem: '',
      items: ['Dragon Ball Super', 'Naruto', 'Mr. Pickles', 'Gantz: O', 'Parasyte'],
      childMessage: '',
    }
  },

  methods: {
    showMessage(val) {
      this.childMessage = val
    },

    add() {
      if (!this.newItem) return
      this.items.unshift(this.newItem)
      this.newItem = ''
    },

    remove(item) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
  }

}
</script>


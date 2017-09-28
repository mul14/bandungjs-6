<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">props</h1>
    <hr>

    <div class="my-4 lead">Message from ChildComponent: {{ childMessage }}</div>

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
      items: ['Dragon Ball Super', 'Naruto', 'Mr. Pickles', 'Gantz: O', 'Parasyte'],
      childMessage: '',
    }
  },

  methods: {
    showMessage(val) {
      this.childMessage = val
    }
  }

}
</script>


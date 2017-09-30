export default {

  render(h) {

    return (
      <div>
        <h1 style="font-weight: lighter; color: #47b784;">JSX? No problemo!</h1>
        <hr/>

        <div class="lead text-muted">Check the <code>src/components/Jsx.vue</code> file</div>

        <h2 class="display-1">Let's make JavaScript dirty!!</h2>

        <button onClick={this.clickHandler} class="btn btn-outline-secondary">Click me!</button>
      </div>
    )
  },

  methods: {
    clickHandler() {
      window.alert('Yes, I am dirty!')
    }
  }

}

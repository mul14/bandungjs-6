export default {

  render(h) {

    return (
      <div>
        <h1 style="font-weight: lighter; color: #47b784;">JSX? No problemo!</h1>
        <hr/>

        <div class="lead text-muted">Check the <code>src/components/Jsx.vue</code> file</div>

        <h2 className="lead" style="font-weight: lighter;">Let's make JavaScript dirty!</h2>

        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  },

  methods: {
    clickHandler() {
      window.alert('Yes, I am dirty!')
    }
  }

}

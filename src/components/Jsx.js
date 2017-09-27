export default {

  render(h) {

    return (
      <div>
        <h1 style="font-weight: lighter; color: #47b784;">JSX? No problemo!</h1>
        <hr/>
        <h2 className="lead" style="font-weight: lighter;">Let's make JavaScript dirty!</h2>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  },

  mounted() {
    window.alert("Let's make your JavaScript dirty!")
  },

  methods: {
    clickHandler() {
      window.alert('Yes, I am dirty!')
    }
  }

}

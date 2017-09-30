<template>
  <div>
    <h1 style="font-weight: lighter; color: #47b784;">two way data binding</h1>
    <hr>

    <div class="lead text-muted">Check the <code>src/components/Form.vue</code> file</div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <input type="text" class="form-control" v-model="message" placeholder="Type a message">
        </div>
        <div class="form-group">
          <label class="control-label p-3 bg-light">
            <input type="checkbox" class="form-control" v-model="checkboxes" :value="1"> Satu
          </label>
          <label class="control-label p-3 bg-light">
            <input type="checkbox" class="form-control" v-model="checkboxes" :value="2"> Dua
          </label>
          <label class="control-label p-3 bg-light">
            <input type="checkbox" class="form-control" v-model="checkboxes" :value="3"> Tiga
          </label>
          <label class="control-label p-3 bg-light">
            <input type="checkbox" class="form-control" v-model="checkboxes" :value="4"> Empat
          </label>
          <label class="control-label p-3 bg-light">
            <input type="checkbox" class="form-control" v-model="checkboxes" :value="5"> Lima
          </label>
        </div>
        <div class="form-group">
          <label class="control-label p-3 bg-light">
            <input type="radio" class="form-control" v-model="radios" :value="1"> Satu
          </label>
          <label class="control-label p-3 bg-light">
            <input type="radio" class="form-control" v-model="radios" :value="2"> Dua
          </label>
          <label class="control-label p-3 bg-light">
            <input type="radio" class="form-control" v-model="radios" :value="3"> Tiga
          </label>
        </div>
        <div class="form-group">
          <button @click="show = !show" class="btn btn-success">
            <span v-text="show ? 'Hide' : 'Show'">Show</span>
            a message
           </button>
          <span v-if="show" class="lead ml-4">Gimana? Keren kan?</span>
        </div>
      </div>
      <div class="col-6"><pre>{{ $data }}</pre></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      checkboxes: [],
      radios: [],
      show: false,
    }
  }
}
</script>

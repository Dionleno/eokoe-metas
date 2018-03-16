<template>
  <div class="container">
    <div id="box-select">
      <div class="form-group">
      <label for="distrito" class="col-sm-2 control-label pull-left">Selecione um distrito:</label>
        <div class="col-sm-2">
          <select id="distrito" v-model="id_distrito" @change="getMetas(id_distrito)" class="form-control" required="required">
              <option v-for="option in destrito" v-bind:key="option.id" v-bind:value="option.id">
              {{ option.name }}
          </option>
          </select>
        </div>
      </div>
    </div>

    <Meta v-for="(item, index) in metas"
          v-bind:item="item"
          v-bind:key="index" />
  </div>
</template>

<script>
import { getDistricts, getMetasByDistrict } from "./Action";
import Meta from "./Components/Meta";
import "./style.css";
export default {
  components: {
    Meta
  },
  data() {
    return {
      destrito: [],
      metas: [],
      id_distrito: ""
    };
  },
  mounted() {
    getDistricts().then(resp => {
      this.destrito = resp;
    });
  },
  methods: {
    getMetas() {
      getMetasByDistrict(this.id_distrito).then(resp => {
        this.metas = resp;
      });
    }
  }
};
</script>

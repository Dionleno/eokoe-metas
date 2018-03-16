<template>
  <div class="row" style="">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 parent-box">
      <div class="box">
        <div class="box-text">
          {{item.description}}
        </div>
        <div class="boxlinks">
          <ul class="lists">
            <li><a v-bind:href="item.url" class="btn btn-danger btn-xs">link</a> </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>      
</template>

<script>
import "../style.css"
export default {
  props: ["item"]
};
</script>
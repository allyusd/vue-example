<template>
  <div class="outside-box">
    <Layout>
      <template v-slot:left>
        <div class="item left">left</div>            
      </template>
      <template v-slot:center>
        <div class="item center">center</div>
      </template>
      <template v-slot:right>
        <div class="item right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'Home',
  components: {
    Layout,
  }
}
</script>

<style>
.outside-box {
    width: 400px;
    margin: 0 auto;
}
.item {
    padding: 2px 10px;
}
.left {
    background-color: #FFBBBB;
}
.center {
    background-color: #BBFFBB;
}
.right {
    background-color: #BBBBFF;
}
.normal-wide {
    width: 50px;
}
.more-wide {
    width: 100px;
}
</style>

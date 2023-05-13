<template>
  <div>
    <div id="slogan">
      <div class="text-center t">
        <h1>getName(s)</h1>

        <br />
        <h5 class="text-secondary">
          Combine palavras aleatórias e crie nomes únicos!
        </h5>
      </div>
    </div>
    <div id="main">
      <DomainList></DomainList>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import DomainList from './components/DomainList.vue';
export default {
  name: 'app',
  components: {
    DomainList,
  },
};
</script>

<style scoped>
#slogan {
  margin-top: 40px;
  margin-bottom: 30px;
}
#main {
  background-color: #f1f1f1;
  padding: 30px 0;
}
</style>

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
      <div class="container">
        <div class="row">
          <div class="col-md">
            <AppItemList
              title="Prefixos"
              v-bind:items="prefixes"
              v-on:addItem="addPrefix"
              v-on:deleteItem="deletePrefix"
            ></AppItemList>
          </div>
          <div class="col-md">
            <AppItemList
              title="Sufixos"
              v-bind:items="sufixes"
              v-on:addItem="addSufix"
              v-on:deleteItem="deleteSufix"
            ></AppItemList>
          </div>
        </div>
        <br />
        <h5>
          getName(s)
          <span class="badge bg-primary">{{ domains.length }}</span>
        </h5>
        <div class="card">
          <div class="mt-3 card-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="domain in domains"
                :key="domain.name"
              >
                <div class="row">
                  <div class="col-md">
                    {{ domain.name }}
                  </div>
                  <div class="col-md text-end">
                    <a
                      :href="domain.checkout"
                      target="blank"
                      class="btn badge btn-success"
                    >
                      <fa icon="cart-shopping" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppItemList from './components/AppItemList.vue';

export default {
  name: 'app',
  components: {
    AppItemList,
  },
  data: () => {
    return {
      prefix: '',
      sufix: '',
      prefixes: ['Moon', 'Ride'],
      sufixes: ['Forest', 'Hub'],
    };
  },
  methods: {
    addPrefix(prefix) {
      this.prefixes.push(prefix);
      this.prefix = '';
    },
    deletePrefix(prefix) {
      this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
    },
    addSufix(sufix) {
      this.sufixes.push(sufix);
      this.sufix = '';
    },
    deleteSufix(sufix) {
      this.sufixes.splice(this.prefixes.indexOf(sufix), 1);
    },
  },
  computed: {
    domains() {
      const domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          const name = prefix + sufix;
          const url = name.toLowerCase();
          const checkout = `https://cart.hostgator.com.br/?pid=d&sld=${url}&tld=.com`;
          domains.push({
            name,
            checkout,
          });
        }
      }
      return domains;
    },
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

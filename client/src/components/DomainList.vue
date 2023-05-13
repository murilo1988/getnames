<template>
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
</template>

<script>
import axios from 'axios';
import AppItemList from './AppItemList.vue';

export default {
  name: 'app',
  components: {
    AppItemList,
  },
  data: () => {
    return {
      prefix: '',
      sufix: '',
      prefixes: [],
      sufixes: [],
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
  created() {
    axios({
      url: 'http://localhost:4000',
      method: 'post',
      data: {
        query: `
            {
                prefixes: items (type:"prefix"){
                    id
                    type
                    description
                }
                sufixes:items(type:"sufix"){
                    id
                    type
                    description
                }
            }
         `,
      },
    }).then((response) => {
      const query = response.data;

      this.prefixes = query.data.prefixes.map((prefix) => prefix.description);
      this.sufixes = query.data.sufixes.map((sufix) => sufix.description);
    });
  },
};
</script>

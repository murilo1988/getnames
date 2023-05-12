<template>
  <div>
    <div id="slogan">
      <div class="text-center t">
        <h1>
          getName(s) <span class="material-symbols-outlined"> done </span>
        </h1>

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
            <h5>
              Prefixos
              <span class="badge bg-primary">{{ prefixes.length }}</span>
            </h5>

            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    class="list-group-item d-flex justify-content-between"
                    v-for="prefix in prefixes"
                    :key="prefix"
                  >
                    {{ prefix }}
                    <button
                      class="mt-1 material-symbols-outlined badge bg-danger"
                      @click="deletePrefix(prefix)"
                    >
                      delete
                    </button>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Digite o prefixo"
                    v-model="prefix"
                    @keyup.enter="addPrefix(prefix)"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" @click="addPrefix(prefix)">
                      <span class="pt-1 text-material-symbols-outlined">
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos <span class="badge bg-primary">{{ sufixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    class="list-group-item d-flex justify-content-between"
                    v-for="sufix in sufixes"
                    :key="sufix"
                  >
                    {{ sufix }}

                    <button
                      class="mt-1 material-symbols-outlined badge bg-danger"
                      @click="deleteSufix(sufix)"
                    >
                      delete
                    </button>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Digite o sufixo"
                    v-model="sufix"
                    @keyup.enter="addSufix(sufix)"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" @click="addSufix(sufix)">
                      <span class="pt-1 text-material-symbols-outlined">
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h5>
          getName(s) <span class="badge bg-primary">{{ domains.length }}</span>
        </h5>
        <div class="card">
          <div class="mt-3 card-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="domain in domains"
                :key="domain"
              >
                {{ domain }}
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
import 'bootstrap/dist/css/bootstrap.css';
export default {
  name: 'app',
  data: () => {
    return {
      prefix: '',
      sufix: '',
      prefixes: ['Moon', 'Ride'],
      sufixes: ['Forest', 'Hub'],
      domains: [],
    };
  },
  methods: {
    addPrefix(prefix) {
      this.prefixes.push(prefix);
      this.prefix = '';
      this.generate();
    },
    deletePrefix(prefix) {
      this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
      this.generate();
    },
    addSufix(sufix) {
      this.sufixes.push(sufix);
      this.sufix = '';
      this.generate();
    },
    deleteSufix(sufix) {
      this.sufixes.splice(this.prefixes.indexOf(sufix), 1);
      this.generate();
    },
    generate() {
      this.domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          this.domains.push(prefix + sufix);
          this.domains.push(sufix + prefix);
        }
      }
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

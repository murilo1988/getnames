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
              Prefixos <span class="badge bg-info">{{ prefixes.length }}</span>
            </h5>

            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="prefix in prefixes"
                    :key="prefix"
                  >
                    {{ prefix }}
                  </li>
                </ul>
                <br />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite o prefixo"
                />
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos <span class="badge bg-info">{{ sufixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="sufix in sufixes"
                    :key="sufix"
                  >
                    {{ sufix }}
                  </li>
                </ul>
                <br />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite o prefixo"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <h5>getName(s) <span class="badge bg-info">0</span></h5>
        <div class="card">
          <div class="card-body">
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
            <input
              type="text"
              class="form-control"
              placeholder="Digite o prefixo"
            />
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
      prefixes: ['Moon', 'Ride', 'Walk'],
      sufixes: ['Forest', 'Hub', 'Trip'],
      domains: ['MoonForest', 'MoonHub', 'MoonTrip'],
    };
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

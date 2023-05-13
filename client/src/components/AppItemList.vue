<template>
  <div>
    <h5>
      {{ title }}
      <span class="badge bg-primary">{{ items.length }}</span>
    </h5>

    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between"
            v-for="item in items"
            :key="item"
          >
            {{ item }}
            <button class="badge btn bg-danger" @click="deleteItem(item)">
              <fa icon="trash-can" />
            </button>
          </li>
        </ul>
        <br />
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Digite o itemso"
            v-model="item"
            @keyup.enter="addItem(item)"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" @click="addItem(item)">
              <fa icon="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppItemList',
  props: ['title', 'items'],
  data() {
    return {
      item: '',
    };
  },
  methods: {
    addItem(item) {
      this.$emit('addItem', item);
      this.item = '';
    },
    deleteItem(item) {
      this.$emit('deleteItem', item);
    },
  },
};
</script>

<style></style>

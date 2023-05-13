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
            :key="item.id"
          >
            {{ item.description }}
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
            placeholder="Digite aqui"
            v-model="description"
            @keyup.enter="addItem(type, description)"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" @click="addItem(type, description)">
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
  props: ['title', 'type', 'items'],
  data() {
    return {
      description: '',
    };
  },
  methods: {
    addItem(type, description) {
      this.$emit('addItem', {
        type,
        description,
      });
      this.description = '';
    },
    deleteItem(item) {
      this.$emit('deleteItem', item);
    },
  },
};
</script>

<style></style>

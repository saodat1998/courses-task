<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        :disabled="currentPage == 1"
        class="btn"
        @click="
          $emit('input', currentPage - 1);
          $emit('clicked');
        "
        type="button"
        v-html="'<'"
      ></button>
    </li>

    <li class="pagination-item" v-for="page in totalPages" :key="page">
      <button
        type="button"
        class="btn"
        :class="{ active: page != currentPage }"
        :disabled="page == currentPage"
        @click="
          $emit('input', page);
          $emit('clicked');
        "
      >
        {{ page }}
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        class="btn"
        :disabled="currentPage == totalPages"
        @click="
          $emit('input', currentPage + 1);
          $emit('clicked');
        "
      >
        >
      </button>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
    },
  };
</script>
<style>
.pagination {
  list-style-type: none;
  margin: auto;
  text-align: center;
}

.pagination-item {
  display: inline-block;
}

.btn {
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  width: 40px;
}
.active {
  background: #4aae9b;
  color: #ffffff;
  border: 1px solid #4aae9b;
}
</style>

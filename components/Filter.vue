<template>
  <select @change="onChange()" v-model="sort" filled rounded label="Sort By">
    <option value="" selected>Sort By</option>
    <option value="date">Sort by Date</option>
    <option value="price">Sort by Price</option>
  </select>
</template>
<script>
  import { mapMutations, mapState } from "vuex";
  export default {
    data: () => ({
      sort: "",
    }),
    computed: {
      ...mapState(["sortBy"]),
    },
    methods: {
      ...mapMutations(["setSortBy"]),
      onChange() {
        this.setSortBy(this.sort);
        this.$emit("sorted");
      },
    },
  };
</script>

<template>
  <form @submit.prevent="submitForm">
    <input label="Name" filled rounded v-model="name" />
    <textarea label="Description" filled rounded v-model="description" />
    <input
      type="number"
      step="0.01"
      label="Price"
      filled
      rounded
      v-model="price"
    />
    <input type="date" v-model="date" />
    <button class="button--green mt-6" type="submit">Save</button>
  </form>
</template>
<script>
  export default {
    props: ["submit", "course"],
    data() {
      return {
        id: "",
        name: "",
        description: "",
        price: 0,
        date: null,
      };
    },
    methods: {
      async submitForm() {
        let formData = {
          id: this.id,
          name: this.name,
          description: this.description,
          price: this.price,
          date: this.date,
        };
        this.$emit("submit", formData);
      },
    },
    mounted() {
      if (this.course) {
        this.id = this.course.id;
        this.name = this.course.name;
        this.description = this.course.description;
        this.price = this.course.price;
        this.date = this.course.date;
      }
    },
  };
</script>
<style>
</style>

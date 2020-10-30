<template>
  <router-link
    class="item"
    :to="{ name: 'courses-course-id', params: { id: course.id } }"
  >
    <div>ID: {{ course.id }}</div>
    <h2 class="title" v-html="course.name" />
    <p class="description" v-html="course.description" />
    <div>Available from {{ course.date }}</div>
    <button class="button--green mt-6">Buy ${{ course.price }}</button>
  </router-link>
</template>
<script>
  export default {
    name: "CourseItem",
    props: ["course"],
  };
</script>
<style lang="scss" scoped>
.description {
  min-height: 100px;
  padding-top: 30px;
}
.item {
  text-decoration: none;
  color: black;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: block;
}
</style>

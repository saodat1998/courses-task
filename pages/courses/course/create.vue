<template>
  <course-form ref="form" @submit="addNewCourse" />
</template>
<script>
  import CourseForm from "@/components/CourseForm";
  import { mapMutations } from "vuex";
  export default {
    data() {
      return {
        formData: {},
      };
    },
    components: {
      CourseForm,
    },
    methods: {
      ...mapMutations(["addCourse"]),
      addNewCourse(data) {
        this.addCourse(data);
        this.$router.push({ path: "/" });
      },
    },
  };
</script>

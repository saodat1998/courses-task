<template>
  <div class="text-center">
    <course-item class="mt-6" :course="course" />
    <button class="button--green mt-6" @click="editCourse">Edit</button>
    <button class="button--grey mt-6" @click="deleteCourse">Delete</button>
    <edit-course-modal ref="edit" :course="course" @updated="getCourse" />
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default {
    name: "CourseDetail",
    data() {
      return {
        course: {},
      };
    },
    components: {
      CourseItem: () => import("@/components/CourseItem"),
    },
    computed: {
      ...mapState(["courses"]),
    },
    methods: {
      ...mapMutations(["setCourses"]),
      ...mapActions(["getCourseById"]),
      deleteCourse() {
        this.setCourses(this.courses.filter((item) => item.id != this.course.id));
        this.$router.push({ path: "/" });
      },
      editCourse() {
        this.$refs.edit.dialog = true;
      },
      async getCourse() {
        this.course = await this.getCourseById(this.$route.params.id);
      },
    },
    mounted() {
      this.getCourse();
    },
  };
</script>

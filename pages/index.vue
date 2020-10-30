<template>
  <div>
    <courses-filter @sorted="getShortList" />
    <router-link class="button--grey" :to="{ path: 'courses/course/create' }">
      Add
    </router-link>
    <div class="row" :key="courses[0] ? courses[0].id : 'course-index'">
      <div class="col-6" v-for="course in coursesPaginated" :key="course.id">
        <course-item :course="course" />
      </div>
    </div>
    <pagination
      @clicked="getShortList"
      :currentPage="page"
      v-model="page"
      :totalPages="Math.round(courses.length / perPage)"
    ></pagination>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        page: 1,
        coursesPaginated: [],
        perPage: 2,
      };
    },
    components: {
      CourseItem: () => import("@/components/CourseItem"),
      CoursesFilter: () => import("@/components/Filter"),
    },
    computed: {
      ...mapState(["courses"]),
    },
    methods: {
      getShortList() {
        let page = this.page;
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        this.coursesPaginated = this.courses.slice(from, to);
      },
    },
    mounted() {
      this.getShortList();
    },
  };
</script>

<style>
.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.col-6 {
  width: 50%;
}
</style>

<template>
  <div v-if="dialog" id="open-modal" class="modal-window">
    <div class="dialog">
      <button color="button--green" @click="dialog = false">x</button>
      <course-form ref="form" @submit="save" :course="course" />
    </div>
  </div>
</template>
<script>
  import { mapMutations } from "vuex";
  export default {
    props: ["course"],
    data() {
      return {
        dialog: false,
      };
    },
    methods: {
      ...mapMutations(["editCourse"]),
      async save(data) {
        await this.editCourse(data);
        this.$emit("updated");
        this.dialog = false;
      },
    },
    components: {
      CourseForm: () => import("@/components/CourseForm"),
    },
    mounted() {
      // this.$refs.form.name = this.course.name;
    },
  };
</script>
<style lang="scss">
.modal-window {
  position: fixed;
  background-color: rgb(0 0 0 / 53%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.3s;
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
  }
}
</style>

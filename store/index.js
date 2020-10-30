export const state = () => ({
  courses: [],
  sortBy: '',
})

export const mutations = {
  setCourses(state, payload) {
    state.courses = payload;
  },
  setSortBy(state, payload) {
    state.sortBy = payload;
    switch (payload) {
      case 'price':
        state.courses = state.courses.sort((a, b) => (
          parseFloat(a.price) < parseFloat(b.price))
          ? 1 :
          (
            parseFloat(a.price) > parseFloat(b.price)
              ? -1 : 0
          )
        );
        break;
      case 'date':
        state.courses = state.courses.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        break;
    }
  },
  addCourse(state, payload) {
    let courses = state.courses.sort(function (a, b) {
      return parseInt(a.id) - parseInt(b.id);
    })
    payload.id = courses[courses.length - 1].id + 1;
    state.courses.push(payload)
  },
  editCourse(state, payload) {
    let index = state.courses.findIndex(item => item.id == payload.id)
    state.courses[index] = payload
  },
}


export const actions = {
  async getCoursesList({ commit }) {
    try {
      const data = await import(`@/assets/dummy/data.json`);
      commit("setCourses", data.default);
    } catch (err) {
      console.log(err);
    }
  },
  getCourseById({ state }, payload) {
    return state.courses.find(
      (item) => item.id == payload
    );
  },
}

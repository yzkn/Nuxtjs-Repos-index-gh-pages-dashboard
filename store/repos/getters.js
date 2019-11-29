// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  getPage(state) {
    // console.log("store/repos/getters.js", "getPage()", "state", state);
    // console.log("store/repos/getters.js", "getPage()", "state.page", state.page);
    return (state.page === undefined || state.page === null || state.page <= 0) ? 1 : state.page;
  },

  getRepos(state) {
    return state.repos;
  }
}

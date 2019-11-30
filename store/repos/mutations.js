// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  ADD_REPOS(state, repos) {
    // console.log('ADD_REPOS state', state)
    // console.log('ADD_REPOS repos', repos)
    repos.forEach(function (value) {
      if (undefined !== value && null !== value) {
        // console.log("mutaions.js", "value", value);
        // if (undefined !== value.html_url && null !== value.html_url) {
        //   console.log("mutations.js", value.html_url);
        // }
        state.repos.splice(-1, 0, value);
      }
    });
    // state.repos = state.repos.concat(repos);

  },
  INCREMENT_PAGE(state) {
    console.log('INCREMENT_PAGE state1', state.page)
    state.page++
    console.log('INCREMENT_PAGE state2', state.page)
  },
  SET_PAGE(state, page) {
    console.log('SET_PAGE state1', state.page)
    state.page = page
    console.log('SET_PAGE state2', state.page)
  },
  NOTIFY(state) {
    state.repos.splice();
    console.log('NOTIFY')
  }
}

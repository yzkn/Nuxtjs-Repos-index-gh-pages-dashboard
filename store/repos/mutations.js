// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  ADD_REPOS(state, repos) { // ADD_REPOS
    // console.log('ADD_REPOS state', state)
    // console.log('ADD_REPOS repos', repos)
    repos.forEach(function (value) {
      if (undefined !== value && null !== value && undefined !== value.html_url && null !== value.html_url)
        console.log("mutations.js", value.html_url);
    });
    state.repos = state.repos.concat(repos);
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
    // console.log('NOTIFY state1', state)
    console.log('NOTIFY a')
    state.repos.splice();
    console.log('NOTIFY b')
    // console.log('NOTIFY state2', state)
  }
}

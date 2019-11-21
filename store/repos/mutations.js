// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  ADD_REPOS(state, repos) { // ADD_REPOS
    console.log('ADD_REPOS state', state)
    console.log('ADD_REPOS repos', repos)
    state.repos = state.repos.concat(repos)
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
  }
}

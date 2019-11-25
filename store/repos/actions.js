// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  async fetchRepos(context) {
    console.log("store/repos/actions.js", "fetchRepos()");

    const URL_GITHUB_API = "https://api.github.com/users/{USERNAME}/repos?per_page=100&page={PAGE}";

    const username = context.rootGetters['user/getUsername'];
    const page = context.getters['getPage'];
    console.log("store/repos/actions.js", "fetchRepos()", "username", username);
    console.log("store/repos/actions.js", "fetchRepos()", "page", page);

    const url = URL_GITHUB_API.replace("{USERNAME}", username).replace(
      "{PAGE}",
      page
    );
    console.log('fetchRepos url', url);
    return; // TODO

    const repoItems = await this.$axios
      .$get(url)
      .then(function (response) {
        console.log('ADD_REPOS', JSON.stringify(response));
        context.commit('ADD_REPOS', response)
        if (response.length > 99) {
          context.commit('INCREMENT_PAGE')
          context.dispatch('fetchRepos')
        } else {
          console.log(context.getters['getRepos'])
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}

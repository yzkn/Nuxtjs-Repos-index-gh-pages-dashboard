// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
export default {
  async fetchRepos(context) {
    console.log('fetchRepos')
    const URL_GITHUB_API = "https://api.github.com/users/{USERNAME}/repos?per_page=100&page={PAGE}";

    const url = URL_GITHUB_API.replace("{USERNAME}", context.getters['user/getUsername']).replace(
      "{PAGE}",
      context.getters['repos/page']
    );
    console.log('fetchRepos url', url)
    const repoItems = await this.$axios
      .$get(url)
      .then(function (response) {
        console.log('ADD_REPOS', JSON.stringify(response));
        context.commit('repos/ADD_REPOS', response)
        if (response.length > 99) {
          context.commit('repos/INCREMENT_PAGE')
          context.dispatch('repos/fetchRepos')
        } else {
          console.log(context.getters['repos/repos'])
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}

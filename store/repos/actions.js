// Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
import axios from 'axios'

const URL_GITHUB_API = "https://api.github.com/users/{USERNAME}/repos?per_page=100&page={PAGE}";

async function retrieveRepos(username, page) {
  const url = URL_GITHUB_API.replace("{USERNAME}", username).replace("{PAGE}", page);
  console.log('retrieveRepos url', url);

  let {
    data
  } = await axios.get(url);
  data.forEach(function (repo) {
    console.log("actions.js", "repo", repo);
  });

  if (data.length > 99) {
    let nextdata = await retrieveRepos(username, page + 1);
    nextdata.forEach(function (repo) {
      data.splice(-1, 0, repo);
    });
    return data;
  } else {
    return data;
  }
}

export default {
  async fetchRepos(context) {
    console.log("store/repos/actions.js", "fetchRepos()");

    const username = context.rootGetters['user/getUsername'];
    console.log("store/repos/actions.js", "fetchRepos()", "username", username);

    let repos = await retrieveRepos(username, 1);
    console.log("res", repos)
    repos.forEach(function (repo) {
      if (undefined !== repo.html_url && null !== repo.html_url) {
        console.log("actions.js", "fetchRepos", repo.html_url)
      }
    });

    console.log('ADD_REPOS') // , JSON.stringify(repos));
    context.commit('ADD_REPOS', repos)
  }
}

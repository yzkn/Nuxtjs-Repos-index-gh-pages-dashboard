<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="green"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
          <v-data-table :headers="headers" :items="repoItems" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ index, item }">
              <td>{{ index + 1 }}</td>
              <td>
                <a :href="item.owner.html_url" target="_blank">
                  <img class="avatar-img" :src="item.owner.avatar_url" />
                  {{ item.owner.login }}
                </a>
                &nbsp;/
                <a :href="item.html_url" target="_blank"
                  >&nbsp;{{ item.name }}&nbsp;</a
                >
              </td>
              <td>{{ item.url }}</td>
              <td>{{ item.has_pages }}</td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.updated_at }}</td>
              <td>{{ item.language }}</td>
              <td>
                {{
                  undefined !== item.license && null !== item.license
                    ? item.license.name
                    : ""
                }}
              </td>
              <td>{{ item.archived }}</td>
              <td>{{ item.disabled }}</td>
              <td class="text-xs-right">{{ item.fork }}</td>
              <td class="text-xs-right">{{ item.issues }}</td>
              <td class="text-xs-right">{{ item.stargazers }}</td>
              <td class="text-xs-right">{{ item.watchers }}</td>
              <td>{{ item.description }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import materialCard from "~/components/material/AppCard";
import { mapGetters } from "vuex";

export default {
  layout: "dashboard",
  components: {
    materialCard
  },
  data: () => ({
    headers: [
      { sortable: false, text: "#", value: "index", align: "right" },
      {
        sortable: true,
        text: "Repository",
        value: "html_url",
        align: "right"
      },
      { sortable: true, text: "URL", value: "url", align: "right" },
      {
        sortable: true,
        text: "Github Pages",
        value: "has_pages",
        align: "right"
      },
      {
        sortable: true,
        text: "Created",
        value: "created_at",
        align: "right"
      },
      {
        sortable: true,
        text: "Updated",
        value: "updated_at",
        align: "right"
      },
      {
        sortable: true,
        text: "Language",
        value: "language",
        align: "right"
      },
      {
        sortable: true,
        text: "License",
        value: "license.name",
        align: "right"
      },
      {
        sortable: true,
        text: "Archived",
        value: "archived",
        align: "right"
      },
      {
        sortable: true,
        text: "Disabled",
        value: "disabled",
        align: "right"
      },
      { sortable: true, text: "Fork", value: "fork", align: "right" },
      {
        sortable: true,
        text: "Issues",
        value: "issues",
        align: "right"
      },
      {
        sortable: true,
        text: "Stargazers",
        value: "stargazers",
        align: "right"
      },
      {
        sortable: true,
        text: "Watchers",
        value: "watchers",
        align: "right"
      },
      {
        sortable: true,
        text: "Description",
        value: "description",
        align: "right"
      }
    ],
    items: [
      {
        html_url: "Dakota Rice",
        url: "Niger",
        has_pages: true,
        created_at: "2020/01/23 04:56:00",
        license: {
          name: "Apache"
        }
      },
      {
        html_url: "Minerva Hooper",
        url: "Curaçao",
        has_pages: true,
        created_at: "2020/01/24 04:56:00"
      },
      {
        html_url: "Sage Rodriguez",
        url: "Netherlands",
        has_pages: true,
        created_at: "2020/01/25 04:56:00"
      }
    ]
  }),
  async asyncData(context) {
    // TODO
    await context.store.dispatch("user/setUsername", "ya-androidapp");
    await context.store.commit("repos/SET_PAGE", 1);

    // console.log(
    //   "table-list.vue",
    //   "asyncData()",
    //   "repos/getPage",
    //   context.store.getters["repos/getPage"]
    // );
    // console.log(
    //   "table-list.vue",
    //   "asyncData()",
    //   "repos/getRepos",
    //   context.store.getters["repos/getRepos"]
    // );
    // console.log(
    //   "table-list.vue",
    //   "asyncData()",
    //   "user/getUsername",
    //   context.store.getters["user/getUsername"]
    // );

    if (context.store.getters["repos/getRepos"].length) {
      return;
    }

    await context.store.dispatch(
      "repos/fetchRepos",
      context.store.getters["user/getUsername"],
      context.store.getters["repos/getPage"]
    );
  },
  computed: {
    repoItems(context) {
      // console.log(
      //   "table-list.vue",
      //   "computed",
      //   "context",
      //   context.$store.getters["repos/getRepos"]
      // );
      let items = context.$store.getters["repos/getRepos"];
      // items.forEach(function(value) {
      //   console.log(value.html_url);
      // });
      return items;
    }
  }
};
</script>

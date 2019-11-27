<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">Daily Sales</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="green" small>mdi-arrow-up</v-icon>
            <span class="green--text">55%</span>&nbsp; increase in today's sales
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light"
              >updated 4 minutes ago</span
            >
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">Email Subscription</h4>
          <p class="category d-inline-flex font-weight-light">
            Last Campaign Performance
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light"
              >updated 10 minutes ago</span
            >
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="green"
          type="Line"
        >
          <h3 class="title font-weight-light">Completed Tasks</h3>
          <p class="category d-inline-flex font-weight-light">
            Last Last Campaign Performance
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light"
              >campaign sent 26 minutes ago</span
            >
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Space"
          value="49/50"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex md12 lg6>
        <material-card
          color="orange"
          title="Repository Stats"
          text="List of repositories"
        >
          <v-data-table :headers="headers" :items="repoItems" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="font-weight-light text-warning text--darken-3"
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
              <td>
                <a :href="item.git_url" target="_blank">git</a>
                <br />
                <a :href="item.ssh_url" target="_blank">ssh</a>
                <br />
                <a :href="item.clone_url" target="_blank">clone</a>
              </td>
              <td>
                <span v-if="item.has_pages">
                  <a
                    :href="
                      'https://' + item.owner.login + '.github.io/' + item.name
                    "
                    target="_blank"
                    >Pages</a
                  >
                </span>
              </td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.updated_at }}</td>
              <td>{{ item.language != null ? item.language : "---" }}</td>
              <td>{{ item.license != null ? item.license.name : "---" }}</td>
              <td>{{ item.archived ? "T" : "-" }}</td>
              <td>{{ item.disabled ? "T" : "-" }}</td>
              <td>
                {{ item.fork ? "T" : "-" }}
                <br />
                <a :href="item.html_url + '/network/members'" target="_blank">{{
                  item.forks_count
                }}</a>
              </td>
              <td>
                <a :href="item.html_url + '/issues'" target="_blank">{{
                  item.open_issues_count
                }}</a>
              </td>
              <td>
                <a :href="item.html_url + '/stargazers'" target="_blank">{{
                  item.stargazers_count
                }}</a>
              </td>
              <td>
                <a :href="item.html_url + '/watchers'" target="_blank">{{
                  item.watchers_count
                }}</a>
              </td>
              <td>{{ item.description != null ? item.description : "---" }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12 lg6>
        <material-card class="card-tabs" color="green">
          <v-flex slot="header">
            <v-tabs v-model="tabs" color="transparent" slider-color="white">
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
                >Tasks:</span
              >
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>Website
              </v-tab>
              <v-tab> <v-icon class="mr-2">mdi-cloud</v-icon>Server </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item v-for="n in 3" :key="n">
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[0]" color="green" />
                  </v-list-tile-action>
                  <v-list-tile-title
                    >Sign contract for "What are conference organized afraid
                    of?"</v-list-tile-title
                  >
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider />
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[1]" color="success" />
                  </v-list-tile-action>
                  <v-list-tile-title
                    >Lines From Great Russian Literature? Or E-mails From My
                    Boss?</v-list-tile-title
                  >
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider />
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[2]" color="success" />
                  </v-list-tile-action>
                  <v-list-tile-title
                    >Flooded: One year later, assessing what was lost and what
                    was found when a ravaging rain swept through metro
                    Detroit</v-list-tile-title
                  >
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip top content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import materialCard from "~/components/material/AppCard";
import materialChartCard from "~/components/material/AppChartCard";
import materialStatsCard from "~/components/material/AppStatsCard";
import { mapGetters } from "vuex";

export default {
  layout: "dashboard",
  middleware: "authentication",
  components: {
    materialCard,
    materialChartCard,
    materialStatsCard
  },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      headers: [
        {
          sortable: true,
          text: "Repository",
          value: "html_url",
          align: "right"
        },
        { sortable: true, text: "URL", value: "item.url", align: "right" },
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
        { sortable: true, text: "Fork", value: "item.fork", align: "right" },
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
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  async asyncData(context) {
    console.log(
      "dashboard.vue",
      "asyncData()",
      "repos/getPage",
      context.store.getters["repos/getPage"]
    );
    console.log(
      "dashboard.vue",
      "asyncData()",
      "repos/getRepos",
      context.store.getters["repos/getRepos"]
    );
    console.log(
      "dashboard.vue",
      "asyncData()",
      "user/getUsername",
      context.store.getters["user/getUsername"]
    );

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
      console.log(
        "dashboard.vue",
        "computed",
        "context",
        context.$store.getters["repos/getRepos"]
      );
      return context.$store.getters["repos/getRepos"];
    }
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    }
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

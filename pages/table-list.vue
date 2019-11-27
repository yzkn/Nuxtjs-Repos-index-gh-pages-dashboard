<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="green"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card
          color="green"
          flat
          full-width
          title="Table on Plain Background"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-actions
          >
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import materialCard from "~/components/material/AppCard";

export default {
  layout: "dashboard",
  components: {
    materialCard
  },
  data: () => ({
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
    items: [
      {
        html_url: "Dakota Rice",
        country: "Niger",
        city: "Oud-Tunrhout",
        salary: "$35,738"
      },
      {
        html_url: "Minerva Hooper",
        country: "CuraÃ§ao",
        city: "Sinaai-Waas",
        salary: "$23,738"
      },
      {
        html_url: "Sage Rodriguez",
        country: "Netherlands",
        city: "Overland Park",
        salary: "$56,142"
      },
      {
        html_url: "Philip Chanley",
        country: "Korea, South",
        city: "Gloucester",
        salary: "$38,735"
      },
      {
        html_url: "Doris Greene",
        country: "Malawi",
        city: "Feldkirchen in KÄÿrnten",
        salary: "$63,542"
      },
      {
        html_url: "Mason Porter",
        country: "Chile",
        city: "Gloucester",
        salary: "$78,615"
      }
    ]
  })
};
</script>

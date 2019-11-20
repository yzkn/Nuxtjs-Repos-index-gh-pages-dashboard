<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <material-card color="success" elevation="12" title="User information">
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    type="text"
                                    v-model="username"
                                    prepend-icon="person"
                                    name="username"
                                    label="Username"
                                    :placeholder="DefaultUsername"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-layout justify-center align-center>
                                <v-btn color="success" @click.prevent="authenticate">Enter</v-btn>
                            </v-layout>
                        </v-card-actions>
                    </material-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import { mapActions } from "vuex";
    import materialCard from "~/components/material/AppCard";

    export default {
        components: {
            materialCard
        },
        data() {
            return {
                DefaultUsername: "ya-androidapp",
                username: "admin"
            };
        },
        async asyncData(context) {
            if (context) {
                if (context.query) {
                    if (context.query.username) {
                        // console.log("query", context);
                        // console.log("query", context.query.username);

                        await context.store.dispatch(
                            "user/setUsername",
                            context.query.username
                        );
                        console.log("query", "dispatch");

                        return {
                            username: context.query.username
                        };
                    }
                }
            }
        },
        computed: {},
        methods: {
            ...mapActions({
                setUsername: "user/setUsername"
            }),

            async authenticate() {
                if (this.username !== undefined && this.username !== null) {
                    await this.setUsername(this.username);
                    this.$router.push({ path: "dashboard" });
                }
            }
        }
    };
</script>

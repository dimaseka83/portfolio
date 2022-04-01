<template>
    <div>
        <v-app-bar color="surface" height="80" class="el" app  :style="{padding: $vuetify.breakpoint.mdAndUp ? '0px 100px': ''}">
                <!-- Smartphone -->
        <div v-show="this.$vuetify.breakpoint.xs">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </div>
        <v-toolbar-title class="text-md-h5 font-weight-bold pointer" @click="$router.push('/')">MyPortfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- No Smartphone -->
        <div v-show="this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
        <v-btn text nuxt to="/">Home</v-btn>
        <v-btn text nuxt to="/about">About</v-btn>
        <v-btn text nuxt to="project">Project</v-btn>
        <v-btn text nuxt to="contact">contact</v-btn>
        <v-divider vertical class="mx-md-5 mx-2"></v-divider>
        </div>
        <v-btn icon v-if="!this.$vuetify.theme.dark" @click="toggleTheme">
            <v-icon>dark_mode</v-icon>
        </v-btn>
        <v-btn icon v-else  @click="toggleTheme">
            <v-icon>light_mode</v-icon>
        </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" >
                    <v-list-item v-for="(nav, i) in navigation" :key="i" @click="$router.push(nav.path)" active-class="deep-purple--text text--accent-4">
                        <v-list-item-icon>
                            <v-icon>{{nav.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{nav.text}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
            navigation: [
                {
                    text: 'Home',
                    icon: 'mdi-home',
                    path: '/'
                },
                {
                    text: 'About',
                    icon: 'mdi-account',
                    path: '/about'
                },
                {
                    text: 'Project',
                    icon: 'mdi-folder-open',
                    path: '/project'
                },
                {
                    text: 'Contact',
                    icon: 'mdi-email',
                    path: '/contact'
                }
            ]
        }
    },
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    }
}
</script>
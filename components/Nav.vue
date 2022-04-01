<template>
    <div>
        <v-app-bar color="surface" height="80" class="el" app  :style="{padding: $vuetify.breakpoint.mdAndUp ? '0px 100px': ''}">
            <v-toolbar-title class="text-md-h5 font-weight-bold pointer" @click="$router.push('/')">MyPortfolio</v-toolbar-title>
        <v-spacer></v-spacer>
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
    </div>
</template>
<script>
export default {
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    }
}
</script>
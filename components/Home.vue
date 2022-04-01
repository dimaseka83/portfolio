<template>
    <div :class="this.$vuetify.theme.dark ? 'dark' : 'light'">
        <v-container>
            <div class="mt-16">
                <v-row>
                    <v-col md="6">
                        <h1 class="display-1 text--disabled font-weight-medium">Hello</h1>
                        <span class="display-3 font-weight-light">I'm</span>&nbsp;&nbsp;&nbsp;<span class="display-3 font-weight-bold">Dhimas</span>
                        <h1 class="display-3 font-weight-bold mt-2">Eka Prasetya</h1>
                        <h1 class="font-weight-normal display-1 mt-10 text--disabled">Developer / Programmer / Engineer</h1>
                        <div class="mt-10">
                        <v-btn color="purple" class="white--text" large @click="contact">Hire Me</v-btn>
                        <v-btn color="indigo" class="ma-2" outlined large nuxt to="/project">Portfolio</v-btn>
                        </div>
                    </v-col>
                    <v-col md="6">
                    <img class="img-profile" src="@/assets/images/fix.png" style="">
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
<script>
import mix from '~/mixins/mix.js';
export default {
    mixins: [mix],
}
</script>
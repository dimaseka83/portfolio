<template>
    <div :class="this.$vuetify.theme.dark ? 'dark' : 'light'">
        <v-container>
            <v-row>
                <v-col md="4">
                    <h1 class="display-2 font-weight-bold my-2">DHIMAS EKA</h1>
                    <p class="text--disabled">Build your application for growth up your bussiness with me.</p>
                </v-col>
                <v-col md="4">
                    <h1 class="text-md-h5 font-weight-bold mb-2">Information</h1>
                    <p class="text--disabled">Address: Jl. Mayjend Sungkono, Malang</p>
                    <p class="text--disabled">Email : dimaseka83@gmail.com</p>
                    <p class="text--disabled">Phone : +62 8953 6042 6592</p>
                </v-col>
                <v-col md="4">
                    <h1 class="text-md-h5 font-weight-bold pl-2">Social Media</h1>
                    <v-btn text @click="instagram">
                        <v-icon left>mdi-instagram</v-icon>
                        instagram
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text @click="linkedin">
                        <v-icon left>mdi-linkedin</v-icon>
                        linkedin
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text @click="github">
                        <v-icon left>mdi-github</v-icon>
                        github
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12">
                    <div class="text-center font-weight-bold">DHIMAS EKA, {{ year }} Allright reserved</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import mix from '~/mixins/mix.js';
export default {
    mixins: [mix],
}
</script>
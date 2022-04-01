<template>
    <div class="mb-16">
        <v-container>
            <v-row>
                <v-col md="12">
                    <div class="d-flex justify-center align-center mt-16">
                            <h1 class="display-1 font-weight-bold">ABOUT ME</h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4">
                    <div class="d-flex justify-center mt-10">
                    <img src="@/assets/images/myphoto.png" class="img-profile2" alt="">
                    </div>
                </v-col>
                <v-col md="6">
                    <div class="mt-8">
                    <span class="display-2 font-weight-light">I'm</span>&nbsp;&nbsp;&nbsp;
                    <span class="display-2 font-weight-bold">Dhimas Eka Prasetya</span>
                    <span class="display-2 font-weight-light">, a Developer <v-spacer></v-spacer> / Programmer / Engineer</span>
                    <v-spacer></v-spacer>
                    <p class="font-weight-light mt-8 text--secondary">
                        Hi there! I'm a full-stack web developer, programmer, and engineer. 
                        I'm currently working as a professional developer and freelancer.
                        I have a passion for programming and I love to create things. I'm currently working on my first project as a professional developer in company.
                        I have dream to be an expert professional software engineer and build professional and high quality software.
                    </p>
                    <v-btn color="purple" class="white--text mt-2" @click="cv">Download CV</v-btn>
                    </div>
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
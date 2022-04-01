<template>
    <div class="mb-16">
        <v-container>
            <v-row>
                <v-col md="12">
                     <div class="d-flex justify-center align-center mt-16">
                            <h1 class="display-1 font-weight-bold">CONTACT ME</h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12">
                    <div class="d-flex justify-center align-center">
                        <span class="text-h5 font-weight-light">please contact me, if you want bussiness application</span>
                    </div>
                    <div class="d-flex justify-center align-center mt-16">
                            <v-btn color="purple" class="white--text" large @click="contact">contact me</v-btn>
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
<template>
    <div :class="this.$vuetify.theme.dark ? 'dark' : 'light'">
        <v-container>
            <v-row>
                <v-col md="12">
                    <div class="d-flex justify-center align-center mt-16">
                        <h1 class="display-1 font-weight-bold">MY PROJECTS</h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12">
                    <v-slide-group>
                        <v-slide-item v-for="(p,i) in projects" :key="`projects-${i}`">
                            <v-card color="surface" width="300" class="el ma-2 mb-5 mr-5">
                                <v-img height="300" :src="p.image">
                                    <template #placeholder>
                                        <v-row class="fill-height" justify="center" align="center">
                                            <v-progress-circular width="2" size="100" color="primary" indeterminate></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                    <v-card-title class="text-md-body-1 font-weight-bold">
                                        {{ p.name }}
                                    </v-card-title>
                                    <v-card-subtitle>
                                        {{ p.description }}
                                    </v-card-subtitle>
                                    <v-card-text>
                                         <v-chip v-for="(t,i) in p.tech" :key="`prod${p.id}-${i }`" x-small label outlined class="mr-1">{{t}}</v-chip>
                                    </v-card-text>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    props: {
        projects: {
            type: Array,
        }
    },
}
</script>

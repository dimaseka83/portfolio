<template>
    <div class="mb-16">
        <v-container>
            <v-row>
                <v-col md="12">
                    <div class="d-flex justify-center align-center mt-16">
                        <h1 class="display-1 font-weight-bold">TESTIMONIALS</h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12">
                     <div class="d-flex justify-center align-center">
                        <span class="font-weight-normal">
                            Some testimonials my client about me
                        </span>
                    </div>
                </v-col>
            </v-row>
            <v-row v-for="row in rows" :key="'row'+row">
                <v-col v-for="(testi, i) in testiInRow(row)" :key="'row'+i">
                    <v-card class="mx-auto">
                        <v-card-text class="text-subtitle-1 font-weight-light">"{{testi.Testimoni}}"</v-card-text>
                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                                <v-img class="elevation-6" :src="testi.image"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{ testi.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    props: {
        testi: {
            type: Array,
        }
    },
    data() {
        return {
            columns: 2
        }
    },
    computed: {
        rows(){
            return this.testi === null ? 0 : Math.ceil(this.testi.length / this.columns);
        }
    },
    methods:{
        testiInRow(row){
            return this.testi.slice((row - 1) * this.columns, row * this.columns);
        }
    }
}
</script>
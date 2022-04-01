<template>
  <v-app dark :style="{backgroundColor: $vuetify.theme.dark ? '#0a0514' : 'white'}">
     <v-main>
        <Nav/>
       <Home />
       <About/>
       <Project :projects="projects"/>
        <Testi :testi="testi"/>
        <Motivation />
        <Contact/>
        <Footer/>
        <ScrollTop/>
     </v-main>
   </v-app>
</template>
<script>
export default {
    data() {
        return {
            projects: null,
            testi: null,
        }
    },
  async created(){
      this.projects = await this.$content('projects').fetch();
      this.testi = await this.$content('testimoni').fetch();
  },
}
</script>
<template>
    <v-app>
        <v-main>
            <Nav/>
            <Project :projects="projects"/>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            projects: null,
        }
    },
  async created(){
      this.projects = await this.$content('projects').fetch();
  },
}
</script>
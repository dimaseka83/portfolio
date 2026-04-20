<script setup>
import HeroSection from "./HeroSection.vue";
import AboutSection from "./AboutSection.vue";
import SkillsSection from "./SkillsSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
import ProjectsSection from "./ProjectsSection.vue";
import CredentialsSection from "./CredentialsSection.vue";
import EducationSection from "./EducationSection.vue";
import ContactSection from "./ContactSection.vue";
</script>

<template>
  <div class="variant-terminal tm-root">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <CredentialsSection />
    <EducationSection />
    <ContactSection />
    <div class="h-20" aria-hidden="true" />
  </div>
</template>

<style scoped>
.tm-root {
  font-family: var(--font-mono);
  min-height: 100vh;
}
</style>

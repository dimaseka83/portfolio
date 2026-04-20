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
  <div class="variant-sticker sb-root">
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
.sb-root {
  overflow-x: hidden;
  background:
    radial-gradient(circle at 20% 10%, rgba(31, 75, 255, 0.08), transparent 40%),
    radial-gradient(circle at 90% 40%, rgba(255, 92, 43, 0.1), transparent 40%),
    radial-gradient(circle at 40% 90%, rgba(234, 179, 8, 0.1), transparent 40%);
}
:where([data-theme="dark"]) .sb-root {
  background:
    radial-gradient(circle at 20% 10%, rgba(124, 163, 255, 0.12), transparent 40%),
    radial-gradient(circle at 90% 40%, rgba(255, 92, 43, 0.15), transparent 40%);
}
</style>

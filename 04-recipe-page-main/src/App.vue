<template>
  <main>
    <RecipeCard />
  </main>
  <footer>
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://darellanodev.github.io" target="_blank" rel="noopener">darellanodev</a>. Code
    repository on
    <a href="https://github.com/darellanodev/fm-projects" target="_blank" rel="noopener">GitHub</a>.
  </footer>
</template>

<script setup>
import RecipeCard from './components/RecipeCard.vue'
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-sm);
}

footer > a {
  color: var(--color-rose-800);
}
</style>

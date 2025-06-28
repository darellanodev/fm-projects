<template>
  <main>
    <RecipeCard />
  </main>
  <footer class="footer">
    Challenge by <a href="#">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.
  </footer>
</template>

<script setup>
import RecipeCard from './components/RecipeCard.vue'
</script>

<style scoped>
.footer {
  text-align: center;
  margin-top: var(--spacing-xl);
  font-size: var(--font-size-sm);
}
</style>

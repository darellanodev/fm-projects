<template>
  <section class="recipe-card__preparation">
    <h2 class="recipe-card__subtitle">Preparation time</h2>
    <ul class="recipe-card__prep-list">
      <li><strong>Total</strong>: Approximately 10 minutes</li>
      <li><strong>Preparation</strong>: 5 minutes</li>
      <li><strong>Cooking</strong>: 5 minutes</li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
.recipe-card__preparation {
  background: var(--color-bg-light);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
}
.recipe-card__prep-list {
  padding-left: 1.2em;
  margin: 0;
}
</style>

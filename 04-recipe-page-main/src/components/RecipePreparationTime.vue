<template>
  <section class="recipe-card__preparation">
    <h2>Preparation time</h2>
    <ul>
      <li><strong>Total</strong>: Approximately 10 minutes</li>
      <li><strong>Preparation</strong>: 5 minutes</li>
      <li><strong>Cooking</strong>: 5 minutes</li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
.recipe-card__preparation {
  background-color: var(--color-rose-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.recipe-card__preparation > h2 {
  margin-top: 0;
  color: var(--color-rose-800);
  font-size: var(--font-size-md);
  font-weight: 700;
}
</style>

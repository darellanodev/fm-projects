<template>
  <section class="recipe-card__ingredients">
    <h2 class="recipe-card__subtitle">Ingredients</h2>
    <ul class="recipe-card__ingredient-list">
      <li>2-3 large eggs</li>
      <li>Salt, to taste</li>
      <li>Pepper, to taste</li>
      <li>1 tablespoon of butter or oil</li>
      <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
    </ul>
    <hr class="recipe-card__divider" />
  </section>
</template>

<script setup></script>

<style scoped>
.recipe-card__ingredient-list {
  padding-left: 1.2em;
  margin: 0 0 var(--spacing-md) 0;
}
.recipe-card__divider {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--spacing-md) 0 0 0;
}
</style>

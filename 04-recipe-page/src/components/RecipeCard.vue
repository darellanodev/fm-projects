<template>
  <article class="recipe-card">
    <RecipeHeader />
    <RecipeDescription />
    <RecipePreparationTime />
    <RecipeIngredients />
    <RecipeInstructions />
    <RecipeNutrition />
  </article>
</template>

<script setup>
import RecipeHeader from './RecipeHeader.vue'
import RecipeDescription from './RecipeDescription.vue'
import RecipePreparationTime from './RecipePreparationTime.vue'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeInstructions from './RecipeInstructions.vue'
import RecipeNutrition from './RecipeNutrition.vue'
</script>

<style scoped>
.recipe-card {
  margin-top: var(--spacing-xl);
}
</style>

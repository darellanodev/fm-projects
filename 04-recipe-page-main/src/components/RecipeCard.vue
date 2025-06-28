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
/* CSS variables and BEM styles here */
</style>

<template>
  <section class="recipe-card__nutrition">
    <h2 class="recipe-card__subtitle">Nutrition</h2>
    <p>The table below shows nutritional values per serving without the additional fillings.</p>
    <table class="recipe-card__nutrition-table">
      <tbody>
        <tr>
          <td>Calories</td>
          <td>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22g</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup></script>

<style scoped>
.recipe-card__nutrition-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--spacing-md);
}
.recipe-card__nutrition-table td {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}
.recipe-card__nutrition-table tr:last-child td {
  border-bottom: none;
}
</style>

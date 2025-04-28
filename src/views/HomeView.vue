<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="cards">
      <Card title="Compétences personnelles" cardColor="#A8E6CF" @click="displaySkills" />
      <Card title="Projets" cardColor="#FF8B94" />
      <Card title="Activité récente" cardColor="#FFD3B6" />
      <Card title="Objectifs techniques" cardColor="#DCEEFF" />
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue'; // Assurez-vous que le chemin est correct
import { useRouter } from 'vue-router';

const router = useRouter();

const displaySkills = () => {
  // Redirige vers la page des compétences
  router.push('/skills');
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cards {
  display: flex;
  gap: 20px; /* Ajoute de l'espace entre les cartes */
  flex-wrap: wrap;
  justify-content: center;
}
</style>

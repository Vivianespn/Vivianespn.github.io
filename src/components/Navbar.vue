<template>
  <nav>
    <div class="nav-container">
      <router-link to="/" class="logo">Viviane</router-link>
      <div class="nav-links">
        <router-link to="/">Início</router-link>
        <router-link to="/about">Sobre</router-link>
        <router-link to="/projects">Projetos</router-link>
        <router-link to="/contact">Contato</router-link>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<style scoped>
nav {
  background-color: var(--bg-primary);
  box-shadow: var(--shadow);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent);
}
@media (max-width: 600px) {
  .nav-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

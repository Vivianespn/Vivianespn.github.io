<template>
  <footer>
    <p>© {{ currentYear }} Viviane. Todos os direitos reservados.</p>
    <div class="social-links">
      <a href="https://github.com/Vivianespn" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-github" /> GitHub
      </a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  background-color: var(--bg-primary);
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
  margin-top: 3rem;
  color: var(--text-secondary);
  transition:
    background-color 0.3s,
    border-color 0.3s;
}
.social-links {
  margin-top: 0.5rem;
}
.social-links a {
  color: var(--accent);
  text-decoration: none;
  margin: 0 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}
.social-links a:hover {
  text-decoration: underline;
}
</style>

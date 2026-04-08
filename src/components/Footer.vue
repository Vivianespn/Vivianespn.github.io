<template>
  <footer>
    <p>© {{ currentYear }} Viviane. Todos os direitos reservados.</p>
    <div class="social-links">
      <a href="https://github.com/Vivianespn" target="_blank" rel="noopener"
        >GitHub</a
      >
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  background-color: #ffffff;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #eee;
  margin-top: 3rem;
}
.social-links {
  margin-top: 0.5rem;
}
.social-links a {
  color: #42b883;
  text-decoration: none;
  margin: 0 0.5rem;
}
.social-links a:hover {
  text-decoration: underline;
}
</style>

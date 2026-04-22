<template>
  <section>
    <h1>Sobre Mim</h1>
    <div class="about-content">
      <p>
        Sou uma desenvolvedora apaixonada por criar soluções web elegantes e
        funcionais. Atualmente estou me aprofundando em Vue.js e outras
        tecnologias modernas.
      </p>
      <h2>Habilidades</h2>
      <ul class="skills-list">
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>Vue.js</li>
        <li>Git & GitHub</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 2rem;
  color: var(--text-primary);
}
.about-content {
  max-width: 800px;
  color: var(--text-secondary);
}
h2 {
  margin: 2rem 0 1rem;
  color: var(--accent);
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
}
.skills-list li {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}
</style>

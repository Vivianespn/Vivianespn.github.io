<template>
  <section>
    <h1>Sobre Mim</h1>
    <div class="about-content">
      <p>
        Sou uma desenvolvedora apaixonada por criar soluções web elegantes e
        funcionais.
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
  color: #2c3e50;
}
.about-content {
  max-width: 800px;
}
h2 {
  margin: 2rem 0 1rem;
  color: #42b883;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
}
.skills-list li {
  background: #e0f2e9;
  color: #2c3e50;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>

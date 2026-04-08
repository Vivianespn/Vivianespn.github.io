<template>
  <section>
    <h1>Projetos</h1>
    <div class="projects-grid">
      <div class="project-card" v-for="proj in projects" :key="proj.id">
        <div class="project-img">🖼️</div>
        <h3>{{ proj.title }}</h3>
        <p>{{ proj.description }}</p>
        <a :href="proj.link" target="_blank" class="project-link"
          >Ver projeto →</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Meu Portfólio',
    description: 'Este site que você está vendo, feito com Vue 3 e Vue Router.',
    link: 'https://github.com/Vivianespn/Vivianespn.github.io',
  },
  {
    id: 2,
    title: 'Projeto Exemplo 2',
    description: 'Descrição breve do projeto. Em breve adicionarei mais.',
    link: '#',
  },
  {
    id: 3,
    title: 'Projeto Exemplo 3',
    description: 'Outro projeto interessante que desenvolvi.',
    link: '#',
  },
];
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.project-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}
.project-card:hover {
  transform: translateY(-5px);
}
.project-img {
  height: 150px;
  background: #e0f2e9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.project-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.project-link {
  display: inline-block;
  margin-top: 1rem;
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
}
</style>

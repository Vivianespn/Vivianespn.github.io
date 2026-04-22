<template>
  <section>
    <h1>Projetos</h1>
    <p class="intro">
      Alguns dos meus projetos no GitHub. Clique para ver mais detalhes.
    </p>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :language="project.language"
        :link="project.link"
        :updated="project.updated"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
  {
    id: 1,
    title: 'AnaliseRedesComplexas',
    description: 'Grafos, Estruturas Complexas e Métricas de Avaliação.',
    language: 'JavaScript',
    link: 'https://github.com/Vivianespn/AnaliseRedesComplexas',
    updated: '2025-12-14',
  },
  {
    id: 2,
    title: 'Otimização de Antenas com GA',
    description:
      'Maximizar a cobertura da área permitida com o menor número possível de antenas.',
    language: 'Python',
    link: 'https://github.com/Vivianespn/Otimiza-o-de-Antenas-com-GA',
    updated: '2025-05-25',
  },
  {
    id: 3,
    title: 'UBS-Conecta',
    description:
      'Site para agendamento de consultas nas UBSs, facilitando o acesso à saúde pública.',
    language: 'HTML',
    link: 'https://github.com/Vivianespn/UBS-Conecta',
    updated: '2025-01-24',
  },
  {
    id: 4,
    title: 'weather-app',
    description:
      'Aplicação em React e TypeScript que consome a OpenWeatherMap API.',
    language: 'TypeScript',
    link: 'https://github.com/Vivianespn/weather-app',
    updated: '2024-08-22',
  },
  {
    id: 5,
    title: 'to-do-list-app',
    description:
      'Aplicativo de To-Do List simples e funcional com adicionar, editar, excluir e marcar tarefas.',
    language: 'CSS',
    link: 'https://github.com/Vivianespn/to-do-list-app',
    updated: '2024-08-22',
  },
  {
    id: 6,
    title: 'Jest-Treino',
    description: 'Treinamento com Jest para testes unitários.',
    language: 'JavaScript',
    link: 'https://github.com/Vivianespn/Jest-Treino',
    updated: '2024-08-08',
  },
  {
    id: 7,
    title: 'Treinamento-Web-Components',
    description: 'Treinamento de Web Components.',
    language: 'JavaScript',
    link: 'https://github.com/Vivianespn/Treinamento-Web-Components',
    updated: '2024-08-07',
  },
  {
    id: 8,
    title: 'Projeto_Sculptor',
    description:
      'Projeto final da disciplina de Programação Avançada com POO e Qt.',
    language: 'C++',
    link: 'https://github.com/Vivianespn/Projeto_Sculptor',
    updated: '2023-05-29',
  },
];
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}
.intro {
  margin-bottom: 2rem;
  color: var(--text-secondary);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}
</style>

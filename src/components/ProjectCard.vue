<template>
  <div class="project-card">
    <div class="project-header">
      <h3>{{ title }}</h3>
      <span class="language" v-if="language">{{ language }}</span>
    </div>
    <p class="description">{{ description }}</p>
    <div class="project-footer">
      <a :href="link" target="_blank" rel="noopener" class="project-link">
        <font-awesome-icon icon="fa-brands fa-github" /> Ver no GitHub
      </a>
      <span v-if="updated" class="updated"
        >Atualizado {{ formatDate(updated) }}</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  language: String,
  link: String,
  updated: String,
});

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' });
};
</script>

<style scoped>
.project-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}
.project-header h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
}
.language {
  background: var(--accent);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
}
.description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.project-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.project-link:hover {
  text-decoration: underline;
}
.updated {
  color: var(--text-secondary);
  font-size: 0.8rem;
}
</style>

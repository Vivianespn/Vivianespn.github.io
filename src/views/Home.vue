<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Olá, eu sou a Viviane</h1>
      <p class="subtitle">Desenvolvedora Web & Estudante</p>
      <p>
        Bem-vindo ao meu portfólio! Aqui você encontrará alguns dos meus
        projetos e um pouco sobre mim.
      </p>
      <router-link to="/projects" class="btn">Ver Projetos</router-link>
    </div>
    <div class="hero-image">
      <!-- Substitua pela sua imagem ou um placeholder -->
      <div class="placeholder-img">
        <font-awesome-icon icon="fa-solid fa-user" size="4x" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin: 2rem 0;
}
.hero-content {
  flex: 1;
}
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}
.subtitle {
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
}
p {
  color: var(--text-secondary);
  line-height: 1.6;
}
.btn {
  display: inline-block;
  background-color: var(--accent);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  margin-top: 1.5rem;
  font-weight: 500;
  transition: background 0.2s;
}
.btn:hover {
  background-color: var(--accent-hover);
}
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}
.placeholder-img {
  width: 250px;
  height: 250px;
  background-color: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  border: 2px solid var(--border-color);
}
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>

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
      <div class="placeholder-img">📸</div>
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
  color: #2c3e50;
}
.subtitle {
  font-size: 1.5rem;
  color: #42b883;
  margin-bottom: 1rem;
}
.btn {
  display: inline-block;
  background-color: #42b883;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  margin-top: 1.5rem;
  font-weight: 500;
  transition: background 0.2s;
}
.btn:hover {
  background-color: #359268;
}
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}
.placeholder-img {
  width: 250px;
  height: 250px;
  background-color: #e0f2e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>

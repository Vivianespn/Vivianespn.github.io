<template>
  <section>
    <h1>Contato</h1>
    <p>
      Fique à vontade para entrar em contato comigo através das redes sociais ou
      e-mail.
    </p>
    <div class="contact-info">
      <div class="contact-item">
        <span>📧</span>
        <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a>
      </div>
      <div class="contact-item">
        <span>💻</span>
        <a href="https://github.com/Vivianespn" target="_blank"
          >github.com/Vivianespn</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}
.contact-info {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}
.contact-item a {
  color: #42b883;
  text-decoration: none;
}
.contact-item a:hover {
  text-decoration: underline;
}
</style>

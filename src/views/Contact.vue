<template>
  <section>
    <h1>Contato</h1>
    <p>
      Fique à vontade para entrar em contato comigo através das redes sociais ou
      e-mail.
    </p>
    <div class="contact-info">
      <div class="contact-item">
        <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
        <a href="mailto:viviane.spn.spn@gmail.com">viviane.spn.spn@gmail.com</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon icon="fa-brands fa-github" class="icon" />
        <a href="https://github.com/Vivianespn" target="_blank"
          >github.com/Vivianespn</a
        >
      </div>
      <!-- Adicione outros contatos se desejar -->
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 2rem;
  color: var(--text-primary);
}
p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: var(--text-primary);
}
.icon {
  width: 1.5rem;
  color: var(--accent);
}
.contact-item a {
  color: var(--accent);
  text-decoration: none;
}
.contact-item a:hover {
  text-decoration: underline;
}
</style>

<!-- docs/.vitepress/theme/components/Footer.vue -->
<template>
  <footer class="footer">
    <p>© 2024 My Project - All Rights Reserved</p>
    <div class="footer-links">
      <a href="https://github.com/your-repo" target="_blank">GitHub</a>
      <a href="/guide/introduction">Docs</a>
      <a href="/contact">Contact</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #35495e;
  color: white;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}
.footer-links a {
  color: #42b983;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-6">Giscus Comments Demo</h1>
    
    <div class="prose prose-lg max-w-none mb-12">
      <p>
        Ez egy demo oldal a Giscus komment rendszer bemutatására. 
        A kommentek a GitHub Discussions-ben tárolódnak.
      </p>
      <p>
        A komment rendszer a következő előnyökkel rendelkezik:
      </p>
      <ul>
        <li>GitHub bejelentkezéssel használható</li>
        <li>Nincs külön adatbázis szükséges</li>
        <li>Ingyenes és nyílt forráskódú</li>
        <li>Támogatja a reakciókat és a válaszokat</li>
      </ul>
    </div>

    <!-- Giscus Comments Component -->
    <GiscusComments />
  </div>
</template>

<script setup lang="ts">
// The GiscusComments component will be auto-imported
</script>
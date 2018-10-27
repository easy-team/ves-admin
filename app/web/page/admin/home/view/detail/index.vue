<template>
  <div style="font-size: 24px; text-align: center">
    <h1>{{article.title}}</h1>
    <iframe :src="article.url" frameborder="0" width="100%" height="600"></iframe>
  </div>
</template>
<style>

</style>
<script lang="ts" src="./index.ts"></script>

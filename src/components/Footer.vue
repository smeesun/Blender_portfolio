<template>
  <footer @click="scrollTop">
    ↑ TOP
  </footer>
</template>

<script setup>
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

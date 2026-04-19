<template>
  <div class="card" @click="$emit('click')">
    <img :src="image" />
    <p>{{ title }}</p>
  </div>
</template>

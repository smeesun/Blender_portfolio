<template>
  <Header />

  <h2>{{ project.title }}</h2>
  <p>{{ project.desc }}</p>

  <div class="grid">
    <Card
      v-for="work in project.works"
      :key="work.id"
      :image="work.image"
      :title="work.title"
      @click="$router.push('/work/' + work.id)"
    />
  </div>

  <Footer />
</template>

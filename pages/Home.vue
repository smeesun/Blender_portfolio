<template>
  <Header />

  <!-- 3D -->
  <ThreeViewer model="models/main.glb" />

  <!-- 企画一覧 -->
  <div class="grid">
    <Card
      v-for="project in projects"
      :key="project.id"
      :image="project.image"
      :title="project.title"
      @click="$router.push('/project/' + project.id)"
    />
  </div>

  <Footer />
</template>

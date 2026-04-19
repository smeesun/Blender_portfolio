<template>
  <Header />

  <ThreeViewer :model="work.model" />

  <h2>{{ work.title }}</h2>
  <p>{{ work.desc }}</p>

  <Footer />
</template>

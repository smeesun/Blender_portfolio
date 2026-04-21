const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const title = ref('My 3D Scene');

        onMounted(() => {
            console.log("model-viewerはすでに表示されています！");
        });

        return { title };
    }
}).mount('#app');

const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup() {
        const title = ref('My 3D Scene');

        onMounted(() => {
            console.log("model-viewerはすでに表示されています！");
        });

        return { title };
    }
});

app.config.compilerOptions.isCustomElement = (tag) => tag === 'model-viewer';

app.mount('#app');

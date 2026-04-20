const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const title = ref('My 3D Scene');

        // Vueが画面に表示された後に実行される
        onMounted(() => {
            console.log("ここに将来、Three.jsの初期化コードを書きます！");
            // 例: initThreeJS();
        });

        return { title };
    }
}).mount('#app');

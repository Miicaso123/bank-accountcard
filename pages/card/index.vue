<template>
  <div class="account">
    <div class="container">
      <div v-if="isMobile" class="page">
        <AccHeader />
        <Card :name="userName"/>
      </div>

      <div v-else class="nopage">
        <NoPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMobile = ref<boolean>(true);
const route = useRoute();
const userName = ref('');

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 500;
};

onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);

  const name = route.query.name;
  if (typeof name === 'string') {
    userName.value = decodeURIComponent(name);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen);
});
</script>

<style scoped>
.account {
  background: #f9f9f9;
  height: 100vh;
}

.container {
  padding: 16px;
}
</style>

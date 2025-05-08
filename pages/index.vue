<template>
  <div class="account">
    <div class="container">
      <div v-if="isMobile" class="page">
        <AccHeader />
        <div class="user">
          <img src="/images/Avatar.png" alt="avatar" />
          <p>{{ userName || '...' }}</p>
        </div>
        <AccCards />
      </div>

      <div v-else class="nopage">
        <NoPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMobile = ref<boolean>(true);
const userName = ref('');

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 500;
};

onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  if (name) {
    userName.value = decodeURIComponent(name);
  }

  window.parent.postMessage(
    {
      type: 'SAVE_ROUTE',
      route: 'https://kbankaccountcard.netlify.app/',
    },
    '*',
  );
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

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
}

.user img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user p {
  color: #3629b7;
  font-weight: bold;
}
</style>

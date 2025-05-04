<template>
  <header class="header">
    <div class="header-back" @click="goBack">
      <span><</span>
      <p>Account and card</p>
    </div>
    <div class="header-tabs">
      <button :class="{ active: activeTab === 'Account' }" @click="activeTab = 'Account'">
        Account
      </button>
      <button :class="{ active: activeTab === 'Card' }" @click="activeTab = 'Card'">Card</button>
    </div>
  </header>
</template>

<script setup lang="ts">
const activeTab = ref('Account');
const router = useRouter();

const goBack = () => {
  window.parent.postMessage({ type: 'CLOSE_IFRAME' }, '*');
};

watch(activeTab, (newTab) => {
  const name = new URLSearchParams(window.location.search).get('name') || '';
  if (newTab === 'Account') {
    router.push({ path: '/', query: { name } });
  } else if (newTab === 'Card') {
    router.push({ path: '/card', query: { name } });
  }
});

onMounted(() => {
  if (router.currentRoute.value.path === '/card') {
    activeTab.value = 'Card';
  }
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  padding: 16px;
}

.header-back {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: bold;
}

.header-tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header-tabs button {
  background: #f2f1f9;
  color: #343434;
  width: 140px;
  height: 40px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
}

.header-tabs button.active {
  background: #3629b7;
  color: white;
}
</style>

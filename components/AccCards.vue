<template>
  <div v-for="account in accounts" :key="account.id">
    <div class="card">
      <div class="card-content">
        <div class="card-account">
          <p>Account {{ account.id }}</p>
          <p>{{ account.Account }}</p>
        </div>
        <div>
          <p class="tag-name">Avalable balance</p>
          <p class="tag">{{ account.Avalable_balance }}</p>
        </div>
        <div>
          <p class="tag-name">Branch</p>
          <p class="tag">{{ account.Branch }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardStore } from '@/stores/cardStore';

const cardStore = useCardStore();
const accounts = computed(() => cardStore.cards);
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.card-content div {
  display: flex;
  justify-content: space-between;
  margin-bottom: -8px;
}

.card-account p {
  font-weight: bold;
}

.card-content .tag {
  color: #3629b7;
  font-weight: 600;
}

.card-content .tag-name {
  color: #979797;
}
</style>

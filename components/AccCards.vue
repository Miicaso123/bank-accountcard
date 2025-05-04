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
const accounts = [
  {
    id: 1,
    Account: 190089881234,
    Avalable_balance: '$20,000',
    Branch: 'New York',
  },
  {
    id: 2,
    Account: 89881234,
    Avalable_balance: '$12,000',
    Branch: 'New York',
  },
  {
    id: 3,
    Account: 190012342222,
    Avalable_balance: '$230,000',
    Branch: 'New York',
  },
];
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

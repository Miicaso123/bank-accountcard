<template>
  <section class="card">
    <div class="card-content">
      <h2>{{ name }}</h2>
      <p>Amazon Platinum</p>
      <p>**** **** **** 9018</p>
      <h3>$3,469.52</h3>
    </div>
    <div class="card-content">
      <h2>{{ name }}</h2>
      <p>Amazon Platinum</p>
      <p>**** **** **** 9018</p>
      <h3>$3,469.52</h3>
    </div>

    <button>Add Card</button>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>();
</script>

<style scoped>
.card-content:nth-child(1) {
  background: linear-gradient(135deg, #3629b7, #5abdf2);
  margin-top: 20px;
  color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-content:nth-child(2) {
  background: linear-gradient(135deg, #d7a041, #e4d153);
  margin-top: 20px;
  color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

button {
  margin: 30px 0;
  width: 100%;
  height: 44px;
  background-color: #3629b7;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
}
</style>

<template>
  <section class="card">
    <TransitionGroup name="slide" tag="div">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        :class="['card-content', { 'second-card': index !== 0 }]"
      >
        <h2>{{ name }}</h2>
        <p>Amazon Platinum</p>
        <p>**** **** **** {{ String(card.Account).slice(-4) }}</p>
        <h3>{{ card.Avalable_balance }}</h3>
      </div>
    </TransitionGroup>

    <button @click="handleAddCard">Add Card</button>
  </section>
</template>

<script setup lang="ts">
import { useCardStore } from '@/stores/cardStore';

defineProps<{ name: string }>();

const cardStore = useCardStore();
const cards = computed(() => cardStore.cards);

const generateAccNumber = () => {
  const length = Math.floor(Math.random() * 5) + 8;
  return Number(Array.from({ length }, () => Math.floor(Math.random() * 10)).join(''));
};

const handleAddCard = () => {
  const newNumber = generateAccNumber();
  cardStore.addCard(newNumber);
};
</script>

<style scoped>
.card-content {
  background: linear-gradient(135deg, #3629b7, #5abdf2);
  margin-top: 20px;
  color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-content.second-card {
  background: linear-gradient(135deg, #d7a041, #e4d153);
}

/* Анимация слева направо */
.slide-enter-active {
  animation: slide-in 0.4s ease-out;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in;
}
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
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

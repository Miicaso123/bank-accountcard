import { defineStore } from 'pinia';

export const useCardStore = defineStore('card', () => {
  const defaultCard = [
    {
      id: 1,
      Account: 190089881234,
      Avalable_balance: '$20,000',
      Branch: 'New York',
    },
  ];

  let savedCards;
  try {
    const raw = localStorage.getItem('cards');
    savedCards = raw ? JSON.parse(raw) : defaultCard;
  } catch (error) {
    console.warn('Ошибка при чтении карточек из localStorage:', error);
    savedCards = defaultCard;
  }

  const cards = ref(savedCards);

  function addCard(accountNumber: number) {
    cards.value.push({
      id: cards.value.length + 1,
      Account: accountNumber,
      Avalable_balance: '$5000',
      Branch: 'New York',
    });

    localStorage.setItem('cards', JSON.stringify(cards.value));
  }

  return { cards, addCard };
});

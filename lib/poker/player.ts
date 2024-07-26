import { Card, Suit, Rank } from "./card";

export class Player {
    hand: Card[];
    stack: number;
    buyins: number;

    constructor(stack: number) {
        this.hand = [];
        this.stack = stack;
        this.buyins = 1;
    }

    decreaseStack(amount: number) {
        this.stack -= amount;
    }

    increaseStack(amount: number) {
        this.stack += amount;
    }

    addCards(cards: Card[]) {
        for (let i = 0; i < cards.length; i++) {
            this.hand.push(cards[i]);
        }
    }

    clearHand() {
        this.hand = [];
    }

    incrementBuyins() {
        this.buyins++;  
    }
}
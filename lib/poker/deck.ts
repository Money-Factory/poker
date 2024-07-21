import { Card, Suit, Rank } from "./card";

class Deck {
    deck: Card[];

    constructor(deckCount: number = 1) {
        let deck: Card[] = [];
        const suits = [Suit.Club, Suit.Diamond, Suit.Spade, Suit.Heart];
        const ranks = [Rank.Two, Rank.Three, Rank.Four, Rank.Five, Rank.Six, Rank.Seven, Rank.Eight, Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King, Rank.Ace];
        for (let i = 0; i < deckCount; i++) {
            for (let j = 0; j < suits.length; j++) {
                for (let k = 0; k < ranks.length; k++) {
                    deck.push(new Card(ranks[k], suits[j]));
                }
            }
        }

        this.deck = deck;
    }

    shuffle() {
        var shuffled = this.deck.slice();
        for (var i = 0; i < shuffled.length; i++) {
            var index = Math.floor(Math.random() * shuffled.length);
            var temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        this.deck = shuffled;
    }

    drawCard(): Card | undefined{
        return this.deck.shift();
    }

    resetDeck(deckCount: number = 1) {
        let deck: Card[] = [];
        const suits = [Suit.Club, Suit.Diamond, Suit.Spade, Suit.Heart];
        const ranks = [Rank.Two, Rank.Three, Rank.Four, Rank.Five, Rank.Six, Rank.Seven, Rank.Eight, Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King, Rank.Ace];
        for (let i = 0; i < deckCount; i++) {
            for (let j = 0; j < suits.length; j++) {
                for (let k = 0; k < ranks.length; k++) {
                    deck.push(new Card(ranks[k], suits[j]));
                }
            }
        }

        this.deck = deck;
    }
}
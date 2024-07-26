import { Deck } from "./deck";
import { Card } from "./card";
import { Player } from "./player";

class TexasHoldem {
    smallBlind: number;
    bigBlind: number;
    pot: number;
    seatOrder: Player[]; //first seat is small blind, second is big blind, last seat is dealer

    constructor(smallBlind: number, bigBlind: number, players: Player[]) {
        this.smallBlind = smallBlind;
        this.bigBlind = bigBlind;
        this.seatOrder = players;
        this.pot = 0;
    }

    rotateBlinds() {
        let newDealer = this.seatOrder.shift();
        if (newDealer != undefined) {
            this.seatOrder.push(newDealer);
        }
    }

    changeBlinds(smallBlind: number, bigBlind: number) {
        this.smallBlind = smallBlind;
        this.bigBlind = bigBlind;
    }

    deal(deck: Deck) {
        for (let i = 0; i < this.seatOrder.length; i++) {
            let card: Card|undefined = deck.drawCard();
            this.seatOrder[i].addCards(deck.drawCard());
        }
    }
}
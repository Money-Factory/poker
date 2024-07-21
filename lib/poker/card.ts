export const enum Rank {
    "Two" = 2,
    "Three"= 3,
    "Four" = 4,
    "Five" = 5,
    "Six" = 6,
    "Seven" = 7,
    "Eight" = 8,
    "Nine" = 9,
    "Ten" = 10,
    "Jack" = 11,
    "Queen" = 12,
    "King" = 13,
    "Ace" = 14
}

export const enum Suit {
    "Heart" = "h",
    "Spade" = "s",
    "Club" = "c",
    "Diamond" = "d"
}

export class Card {
    rank: Rank;
    suit: Suit;

    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }
}
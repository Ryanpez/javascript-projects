const whoWon = require("../RPS.js");

describe("whoWon", function() {
    test("return 'TIE!' if both players have the same value", () => {
        expect(whoWon("rock", "rock")).toBe("TIE!");
    });

    test("return 'Player 2 wins!' if p1 = rock and p2 = paper", () => {
        expect(whoWon("rock", "paper")).toBe("Player 2 wins!");
    });

    test("return 'Player 2 wins!' if p1 = paper and p2 = scissors", () => {
        expect(whoWon("paper", "scissors")).toBe("Player 2 wins!");
    });

    test("return 'Player 2 wins!' if p1 = scissors and p2 = rock", () => {
        expect(whoWon("scissors", "rock")).toBe("Player 2 wins!");
    });

    test("return 'Player 1 wins!' if p1 = paper and p2 = rock", () => {
        expect(whoWon("paper", "rock")).toBe("Player 1 wins!");
    });

    test("return 'Player 1 wins!' if p1 = scissors and p2 = paper", () => {
        expect(whoWon("scissors", "paper")).toBe("Player 1 wins!");
    });

    test("return 'Player 1 wins!' if p1 = rock and p2 = scissors", () => {
        expect(whoWon("rock", "scissors")).toBe("Player 1 wins!");
    });
    
});
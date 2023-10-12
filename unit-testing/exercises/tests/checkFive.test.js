const checkFive = require("../checkFive.js");


describe("checkFive", function() {

    test("Returns 'num is less than 5.' when passed a number less than 5", () => {
        expect(checkFive(2)).toBe("2 is less than 5.");
    });
    test("returns 'num is greater than 5.' when passd a number greater than 5", () => {
        expect(checkFive(7)).toBe("7 is greater than 5.");
    });
    test("returns 'num is equal to 5.' when passed 5", () => {
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });

   });
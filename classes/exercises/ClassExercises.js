// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded);
    }

    dispose(currentYear) {
        currentYear = 2023;
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'Yes';
            return this.discarded;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded);
    }

    checkout(numTimes) {
        this.timesCheckedOut += numTimes;
        return this.timesCheckedOut;
    }

    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
            return this.discarded;
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No" );
let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:

console.log(newManual.dispose());
console.log(newManual);

console.log(newNovel.checkout(5));
newNovel.dispose();
console.log(newNovel);
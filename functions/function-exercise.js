
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
}
    return line
}
//console.log(makeLine(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function makeSquare(size) {
let square = '';
    for ( let i = 0; i < size; i++) {
        square += makeLine(size)+ '\n';
}
    square = square.slice(0, square.length - 1);
    return square.slice(0,-1);
}

//console.log(makeSquare(5));

function makeRectangle(height, width) {
let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0,-1);
}
//console.log(makeRectangle(5, 7));

function makeDownWardsStairs(steps) {
let stairs = '';
    for (let i = 0; i < steps; i++) {
        stairs += makeLine(i + 1) + '\n';
    }
    return stairs;
}

//console.log(makeDownWardsStairs(7));

function makeSpaceLine(numSpaces, numChars) {;
   let spaces = '';

    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }

    let chars = makeLine(numChars);

    return `${spaces}${chars}${spaces}`;
}
//console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
    triangle = '';

    for(let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1,2 * i + 1) + '\n';
    }

    return triangle.slice(0,-1);
}

//console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let topHalf = makeIsoscelesTriangle(height);

    let bottomHalf = reverse(topHalf);


    return `${topHalf}\n${bottomHalf}`;
}
console.log(makeDiamond(5));











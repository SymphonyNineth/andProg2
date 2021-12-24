function generator(matLen, gr, grEat, predator, mushroom) {
    let matrix = [];
    for (let y = 0; y < matLen; y++) {
        matrix[y] = [];
        for (let x = 0; x < matLen; x++) {
            matrix[y][x] = 0;
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }

    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < mushroom; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(15, 30, 10, 11, 2);
console.log(matrix);

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let mushroomArr = [];

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");
    frameRate(3);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y);
                grassEaterArr.push(grE);
            } else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y);
                predatorArr.push(pre);
            } else if (matrix[y][x] == 4) {
                let mush = new Mushroom(x, y);
                mushroomArr.push(mush);
            }
        }
    }
    // console.log(grassArr);
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
    }
    for (let i in mushroomArr) {
        mushroomArr[i].mul();
    }
}

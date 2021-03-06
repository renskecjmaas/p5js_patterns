var siz = 10;
var seed = 160;
var round = 1;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CENTER);

    seed = random(1000);
    round = random(siz / 2);

}


function draw() {

    background(0);
    randomSeed(seed)
    fill(255);
    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            var y = noise(seed, i / siz * 4, j * siz / 4) * siz;
            var rd = random(100);

            if (rd < 50) {
                rect(i, j, y, y);
            } else {
                ellipse(i, j, y, y);
            }
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    siz = int(random(10, 25));
    round = random(siz / 2);

}

var siz = 80;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CENTER);

}


function draw() {

    background(0);
    var offsetx = map(mouseX, 0, windowWidth, -siz / 2, +siz / 2);
    var offsety = map(mouseY, 0, windowHeight, -siz / 2, +siz / 2);

    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {

            fill(255);

            stroke(255);
            line(i + offsetx, j + offsety, i - siz / 2, j);
            line(i + offsetx, j + offsety, i + siz / 2, j);
            line(i + offsetx, j + offsety, i, j - siz / 2);
            line(i + offsetx, j + offsety, i, j + siz / 2);
            line(i + offsetx, j + offsety, i - siz / 2, j - siz / 2);
            line(i + offsetx, j + offsety, i - siz / 2, j + siz / 2);
            line(i + offsetx, j + offsety, i + siz / 2, j - siz / 2);
            line(i + offsetx, j + offsety, i + siz / 2, j + siz / 2);

            line(i + offsetx, j + offsety, i + siz / 2, j + siz * 1 / 4);
            line(i + offsetx, j + offsety, i + siz / 2, j - siz * 1 / 4);
            line(i + offsetx, j + offsety, i - siz / 2, j + siz * 1 / 4);
            line(i + offsetx, j + offsety, i - siz / 2, j - siz * 1 / 4);



        }
    }
}

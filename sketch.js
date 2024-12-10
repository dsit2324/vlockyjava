let snowflakes = [];

class Snowflake {
  constructor() {
    //constructor nastavuje pocatecni hodnoty
    this.x = random(width); //this = tento objekt
    this.y = 0;
    this.size = random(10, 20); //minimum je 10, maximum je 20
    this.speed = random(1, 3);
    this.color = color(random(255), random(255), random(255)); //kdyz je v zavorce random jenom 1 parametr, bere se to jako maximum a minimum je 0
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.y += this.speed;
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 0, 130);
  if (random(1) < 0.2) {
    snowflakes.push(new Snowflake());
  }
  for (let i = 0; i < snowflakes.length; i++) {
    if (snowflakes[i].y > height + 20) {
      snowflakes.splice(i, 1);
    } // vyska canvas
    snowflakes[i].update();
    snowflakes[i].draw();
  }
}

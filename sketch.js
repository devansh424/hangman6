var words = ["HELLO", "HI", "BYE", "SKY"];

//var words = ["NONPLUSSED", "INCHOATE", "PANACHE", "INDEFATIGABLE"];
// meaning of word 1  “Filled with bewilderment”
// meaning of word 2  “Only partly in existence; imperfectly formed”
// meaning of word 3  “distinctive and stylish elegance,”
// meaning of word 4  “Showing sustained enthusiastic action with unflagging vitality”

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var clickSound;
var button = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var answerArray = [];
var num1, num2, num3, num4, num5, num6;
var gameEnded;
var counter = 0;
var bodyCounter = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  clickSound = loadSound("sound/clickbutton.mp3");
}

function setup() {
  createCanvas(550, 600);
  background("pink");

  b1 = createButton(button[0]);
  b1.position(120, 400);
  b1.mousePressed(() => {
    checkLetter(button[0],b1);
  });

  b2 = createButton(button[1]);
  b2.position(150, 400);
  b2.mousePressed(() => {
    checkLetter(button[1],b2);
  })

  b3 = createButton(button[2]);
  b3.position(180, 400);
  b3.mousePressed(() => {
    checkLetter(button[2],b3);
  })

  b4 = createButton(button[3]);
  b4.position(210, 400);
  b4.mousePressed(() => {
    checkLetter(button[3],b4);
  })

  b5 = createButton(button[4]);
  b5.position(240, 400);
  b5.mousePressed(() => {
    checkLetter(button[4],b5);
  })

  b6 = createButton(button[5]);
  b6.position(270, 400);
  b6.mousePressed(() => {
    checkLetter(button[5],b6);
  })

  b7 = createButton(button[6]);
  b7.position(300, 400);
  b7.mousePressed(() => {
    checkLetter(button[6],b7);
  })

  b8 = createButton(button[7]);
  b8.position(330, 400);
  b8.mousePressed(() => {
    checkLetter(button[7],b8);
  })

  b9 = createButton(button[8]);
  b9.position(360, 400);
  b9.mousePressed(() => {
    checkLetter(button[8],b9);
  })

  b10 = createButton(button[9]);
  b10.position(385, 400);
  b10.mousePressed(() => {
    checkLetter(button[9],b10);
  })

  b11 = createButton(button[10]);
  b11.position(415, 400);
  b11.mousePressed(() => {
    checkLetter(button[10],b11);
  })

  b12 = createButton(button[11]);
  b12.position(120, 430);
  b12.mousePressed(() => {
    checkLetter(button[11],b12);
  })

  b13 = createButton(button[12]);
  b13.position(150, 430);
  b13.mousePressed(() => {
    checkLetter(button[12],b13);
  })

  b14 = createButton(button[13]);
  b14.position(180, 430);
  b14.mousePressed(() => {
    checkLetter(button[13],b14);
  });

  b15 = createButton(button[14]);
  b15.position(210, 430);
  b15.mousePressed(() => {
    checkLetter(button[14],b15);
  });

  b16 = createButton(button[15]);
  b16.position(240, 430);
  b16.mousePressed(() => {
    checkLetter(button[15],b16);
  });

  b17 = createButton(button[16]);
  b17.position(270, 430);
  b17.mousePressed(() => {
    checkLetter(button[16],b17);
  });

  b18 = createButton(button[17]);
  b18.position(300, 430);
  b18.mousePressed(() => {
    checkLetter(button[17],b18);
  });

  b19 = createButton(button[18]);
  b19.position(330, 430);
  b19.mousePressed(() => {
    checkLetter(button[18],b19);
  });

  b20 = createButton(button[19]);
  b20.position(360, 430);
  b20.mousePressed(() => {
    checkLetter(button[19],b20);
  });

  b21 = createButton(button[20]);
  b21.position(385, 430);
  b21.mousePressed(() => {
    checkLetter(button[20],b21);
  });

  b22 = createButton(button[21]);
  b22.position(415, 430);
  b22.mousePressed(() => {
    checkLetter(button[21],b22);
  });

  b23 = createButton(button[22]);
  b23.position(230, 460);
  b23.mousePressed(() => {
    checkLetter(button[22],b23);
  });

  b24 = createButton(button[23]);
  b24.position(263, 460);
  b24.mousePressed(() => {
    checkLetter(button[23],b24);
  });

  b25 = createButton(button[24]);
  b25.position(290, 460);
  b25.mousePressed(() => {
    checkLetter(button[24],b25);
  });

  b26 = createButton(button[25]);
  b26.position(318, 460);
  b26.mousePressed(() => {
    checkLetter(button[25],b26);
  });

  b27 = createButton('Hint ?');
  b27.position(100, 200);
  b27.mousePressed(() => {
    hint();
    clickSound.play();
    if (gameState === END) {
      clickSound.stop();
    }
  });


  for (var j = 0; j < word.length; j++) {
    text("_", j * 20 + 200, 375);
  }
}

function draw() {

  stroke("gray");
  line(250, 100, 250, 350); //gallows
  line(250, 100, 300, 100); //top line
  line(200, 350, 350, 350); //base line
  line(300, 100, 300, 135); //rope

}

function hint() {
  if (gameState === PLAY) {
    if (words[0] === word || words[1] === word || words[2] === word || words[3] === word) {
      if (words[0] === word) {
        stroke("black");
        strokeWeight(0);
        text("Hint - meaning of the word - Filled with bewilderment", 50, 500);
      } else if (words[1] === word) {
        text("Hint - meaning of the word - Only partly in existence; imperfectly formed", 50, 500);
      } else if (words[2] === word) {
        text("Hint - meaning of the word - distinctive and stylish elegance", 50, 500);
      } else if (words[3] === word) {
        text("Hint - meaning of the word - Showing sustained enthusiastic action with unflagging vitality", 10, 500);
      }
    }
  }
}

function checkLetter(r,b) {
  if (gameState === PLAY) {
    console.log(r);
    b.hide();
    counter++;
    console.log(counter);
    for (var i = 0; i < word.length; i++) {
      clickSound.play();
      if (r === word[i]) {
        counter--;
        fill("black");
        textSize(12);
        text(r, i * 20 + 200, 370);
        answerArray[i] = r;
        console.log(answerArray);
      }
    }
    
    if (counter === 1) {
      noFill();
      circle(300, 160, 50);
    } else if (counter === 2) {
      line(300, 185, 300, 260);
    } else if (counter === 3) {
      line(300, 195, 280, 250);
    } else if (counter === 4) {
      line(300, 195, 320, 250);
    } else if (counter === 5) {
      line(300, 255, 280, 320);
    } else if (counter === 6) {
      line(300, 255, 320, 320);
    }
    
    if (counter >= 6) {
     fill("red");
     textSize(28);
     text("YOU LOST", 200, 74);
     gameState = END;
    }
  }
  
  var x = answerArray.join('');
  if (x === word) {
    console.log(x);
    fill("red");
    textSize(28);
    text("YOU WON", 200, 70);
    gameState = END;
  }
}


if (gameState === END) {
  clickSound.stop();
}
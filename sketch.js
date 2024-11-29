//Copyright Vidisha Jain 
//Please do not replicate visuals or code

//INSTRUCTIONS
//- GRANT ACCESS TO MIC
//- SWITCH ON ANY SONG OR SOUND
//- CLICK PLAY BUTTON ABOVE
//- CLICK START ON SCREEN
//- PRESS KEYS 1-6 TO ALTERNATE BETWEEN VISUALS
//- CLICK ANYWHERE OR PRESS ANY OTHER KEY TO STOP

let state = 1; 

let trebEnergy, midEnergy, bassEnergy;
let fft, spectrum;

var on = false;

let c = 0
    let d = 50 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0)
  
  mic = new p5.AudioIn(); 
   mic.start(); 
  
  amp = new p5.Amplitude(); 
  amp.setInput(mic);

  fft = new p5.FFT();
  fft.setInput(mic);

  
  line1 = new Line (width/300, height/9)
  line2 = new Line (width/20, height/20)
  line3 = new Line (width/120, height/3)
  line4 = new Line (width/3, height/4)
  line5 = new Line (width/400, height/5)

}

function changecolor(){
   let level = amp.getLevel();
  print(level);
  
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100); //GREEN
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102,30) //PINK
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207,40) //PURPLE
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19,70) //YELLOW
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207,47) //CREAM
  }
}


function draw() {
  
  if (on) {
    
    if (state ==1){
    
      background(0)
      fill(255)
      text('PRESS ANY KEY 1-7', 60, 320);
  }

    // VISUAL REACTOR 1 - GLOWSTICKS
    if (state ==2){
   let level = amp.getLevel(); 
  print (level);
  
  background (0)
  translate(100,0)
  
  line1.show();
  line2.show();
  line3.show();
  line4.show();
  line5.show();
    
    } 
    
    //VISUAL REACTOR 2 - NIGHTCLUB
   else if (state ==3)  {
        //detect volume from mic 
  
  //analyze frequency
  spectrum = fft.analyze();
  
  trebEnergy = fft.getEnergy("treble");
  midEnergy= fft.getEnergy("mid");
  bassEnergy = fft.getEnergy("bass");
  
  background (0);
  
  //loop variable for ellipses to go across canvas
   for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y +=50) {
   
      //various colours changing depending on volume
  
      changecolor()
  
      //ellipses appearing on background changing size depending on detected frequency and loop
  ellipse (x, y, trebEnergy);
  ellipse (x, y, midEnergy);
  ellipse (x, y, bassEnergy);
      
    }
     
     }
       
     }
    
    
    //VISUAL REACTOR 3 - ELLASTIC ELLIPSES
    else if (state ==4){
      background(0);
  
  //detect volume from mic 
  let level = amp.getLevel();
  
  //analyze frequency
  spectrum = fft.analyze();
  
  trebEnergy = fft.getEnergy("treble");
  midEnergy= fft.getEnergy("mid");
  bassEnergy = fft.getEnergy("bass");
  
  //various colours changing depending on volume
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100); //GREEN
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102) //PINK
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207) //PURPLE
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19) //YELLOW
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207) //CREAM
  }
  
    //ellipses changing size, both width and height, depending on amplitude
  // ellipse (200, trebEnergy, 20, 20);
  ellipse (180, 200, 200, midEnergy);
  ellipse (180, bassEnergy+270, bassEnergy/1.5, bassEnergy/1.5);
    }
    
    // VISUAL REACTOR 4 - SPEAKERS
   if (state ==5){
 
      let level = amp.getLevel();
  print(level);
  
  //analyse frequency
  spectrum = fft.analyze();
  
  trebEnergy = fft.getEnergy("treble");
  midEnergy= fft.getEnergy("mid");
  bassEnergy = fft.getEnergy("bass");
      
//various colours changing depending on volume
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100); //GREEN
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102,30) //PINK
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207,40) //PURPLE
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19,70) //YELLOW
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207,47) //CREAM
  }

  //inner ellipses changing size depending on amplitude
  ellipse (180, 110, trebEnergy/1.5);
  ellipse (180, 280, midEnergy/1.5);
  ellipse (180, 470, bassEnergy/1.5);
   }
    
   //VISUAL REACTOR 5 - VERTICAL LINES
    if (state == 6){
      background(0)
       for (var a = 0;  a <= width; a += 50) {
    for (var b = 50; b <= height; b +=50) {
    
      let level = amp.getLevel();
  print(level);
  
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100);
    ellipse (a,b,level*200, 200);
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102,30)
    ellipse (a, b, level*200, 600);
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207,40)
    ellipse (a, b, level*400, 400);
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19,70)
    rect (a, b, level*300, 400);
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207,47)
    ellipse (a, b, level*400, 400);
  }
    }
       }
  
    
  }
    //VISUAL REACTOR 6 - ELLIPSES IN MOTION
    if (state == 7){

    c +=2; 
  if(c > width){
    c = 0;
    d += 50;
  }

  if(c > height){
    d = 0;
}
      
      let level = amp.getLevel();
  print(level);
  
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100);
    ellipse (c,d,level*200, 200);
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102,30)
    ellipse (c, d, level*200, 600);
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207,40)
    ellipse (c, d, level*400, 400);
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19,70)
    rect (c, d, level*300, 400);
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207,47)
    ellipse (c, d, level*400, 400);
  }
    }
  
    //VISUAL REACTOR 7 - NIGHTCLUB 2
   else if (state ==8)  {
        //detect volume from mic 
  let level = amp.getLevel();
  print(level);
  
  //analyze frequency
  spectrum = fft.analyze();
  
  trebEnergy = fft.getEnergy("treble");
  midEnergy= fft.getEnergy("mid");
  bassEnergy = fft.getEnergy("bass");
  
  background (0);
  
  //loop variable for ellipses to go across canvas
   for (var m = 0; m <= width; m += 90) {
    for (var n = 0; n <= height; n +=90) {
   
      //various colours changing depending on volume
  if (level <= 0.02) {
    noStroke();
    fill(102,255,204, 100); //GREEN
  }
  
  if (level > 0.02 && level <= 0.04) {
    noStroke();
    fill(255, 0, 102,30) //PINK
  }
  
  if (level > 0.04 && level <= 0.06) {
    noStroke();
    fill(151, 37, 207,40) //PURPLE
  }
  
  if (level > 0.06 && level <= 0.08) {
    noStroke();
    fill(242, 220, 19,70) //YELLOW
  }
  
  if (level > 0.08 && level < 0.1) {
    noStroke();
    fill(245, 245, 207,47) //CREAM
  }
  
      //ellipses appearing on background changing size depending on detected frequency and loop
  ellipse (m, n, trebEnergy);
  ellipse (m, n, midEnergy);
  ellipse (m, n, bassEnergy);
      
    }
     
     }
       
     }
    
    
  } //bracket for if on
  
  //START BUTTON - OPENING PAGE
  else {
   background(0);
  rectMode (CENTER);
 stroke (255);
    noFill();
    rect(180, 300, 100, 50);
  fill (255);
    noStroke();
  textSize(25);
text('START', 140, 310);

//CHANGES COLOUR OF START BUTTON WHEN HOVERED
  if (mouseX < 250 && mouseX > 150 && mouseY < 325 && mouseY > 275) {
  rectMode (CENTER);
     fill(255);
  rect(180, 300, 100, 50);
  fill (0);
    text('START', 140, 310);
fill(0);
  }
}
}

//DEFINES WHICH KEY SWITCHES ON WHICH VISUAL
function keyTyped() {
  state = 1
  if (key === '1') {
    state = 2;
  } if (key === '2') {
    state = 3;
  }  if (key === '3') {
    state = 4;
  } if (key === '4') {
  background (0);
    state = 5;
  } if (key === '5') {
    state = 6;
  }
  if (key === '6') {
    background(0);
    state = 7;
  }
   if (key === '7') {
    background(0);
    state = 8;
  }
  
}
  
//CLICK START BUTTON
function mousePressed () {
  if (mouseX < 250 && mouseX > 150 && mouseY < 325 && mouseY > 275) 
    (on= true)
}

//STOPS VISUALS
  function mouseClicked() {
    state = 1;
}

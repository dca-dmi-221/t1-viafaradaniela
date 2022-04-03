let startScreen;
let playlists;
let playlistSeason1;
let playlistSeason2;
let playlistFansFavorite;
//arreglo de objetos 

function setup() {
  interface = 0;
  createCanvas(1280, 720);
  slider = createSlider(0, 1, 0.5, 0.01);
  //song = loadSound("music/All_for_us.mp3", loaded)
  song = loadSound("music/Hit_Em_Up.mp3", loaded)
  playlists = loadImage("images/playlist.jpg");
  playlistSeason1 = loadImage("images/playlist_1.jpg");
  playlistSeason2 = loadImage("images/playlist_2.jpg");
  playlistFansFavorite = loadImage("images/playlist_3.jpg");
  startScreen = loadImage("images/start.jpg");
}

function loaded() {
  song.play();
}

function draw() {
  background(0);
  song.setVolume(slider.value());
  //pantallaUno();
  switch (interface) {
    case 0:
      image(startScreen, 0, 0, 1280, 720)
      break; //pantalla inicio
    case 1:
      image(playlists, 0, 0, 1280, 720)
      break; //escoger playlist
    case 2:
      image(playlistSeason1, 0, 0, 1280, 720)
      break; //playlist season 1
    case 3:
      image(playlistSeason2, 0, 0, 1280, 720)
      break; //playlist season 2
    case 4:
      image(playlistFansFavorite, 0, 0, 1280, 720)
      break; //playlist fans
  }
  text("x:" + mouseX + " y: " + mouseY, mouseX, mouseY);
}

function mousePressed() {
  if (interface === 0) {
    if (dist(mouseX, mouseY, 679, 587) < 90) {
      interface = 1;
    }
  }
    if (interface === 1) {
      if (dist(mouseX, mouseY, 452, 141) < 90) {
        console.log("pantallados");
        interface = 2;
      } 
      
      else if (dist(mouseX, mouseY, 813, 150) < 90) {
        interface = 3;
      } 
      
      else if (dist(mouseX, mouseY, 448, 503) < 90) {
        interface = 4;
      }
    }
    else {
        if (mouseX > 71 && mouseX < 171 && mouseY > 68 && mouseY < 133) {
          interface = 1;
        }
    }
  }


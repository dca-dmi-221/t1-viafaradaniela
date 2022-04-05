let song, songI;
let startScreen;
let playlists;
let playlistSeason1;
let playlistSeason2;
let playlistFansFavorite;
const playlist0 = [];
const playlist1 = [];
const playlist2 = [];
const songInfo = [{ //playlist season 1

    file: "music/All_for_us.mp3",
    img: "images/all_for_us.png",
  },
  {
    file: "music/Formula.mp3",
    img: "images/formula.png",
  },
  {
    file: "music/When_i_r.i.p.mp3",
    img: "images/when_i_r.i.p.png",
  },
  {
    file: "music/Still_dont_know_my_name.mp3",
    img: "images/still_dont_know_my_name.png",
  },
  {
    file: "music/Mount_Everest.mp3",
    img: "images/mount_everest.png",
  },
  { //playlist season 2

    file: "music/Im_tired.mp3",
    img: "images/im_tired.png",
  },
  {
    file: "music/Elliot_song.mp3",
    img: "images/elliot_song.png",
  },
  {
    file: "music/Pick_Me_Up.mp3",
    img: "images/pick_me_up.png",
  },
  {
    file: "music/Lo_Vas_A_Olvidar.mp3",
    img: "images/lo_vas_a_olvidar.png",
  },
  {
    file: "music/Watercolor_eyes.mp3",
    img: "images/watercolor_eyes.png",
  },
  { //playlist fans favorite

    file: "music/Hit_Em_Up.mp3",
    img: "images/hit_em_up.png",

  },
  {
    file: "music/Stand_By_Me.mp3",
    img: "images/stand_by_me.png",
  },
  {
    file: "music/Yeh_I_Fuckin_Did_It.mp3",
    img: "images/yeh_i_fuckin_did_it.png",
  },
  {
    file: "music/All_for_us.mp3",
    img: "images/all_for_us_2.png",
  }
]
//arreglo de objetos 

function setup() {
  interface = 0;
  createCanvas(1280, 720);
  slider = createSlider(0, 1, 0.5, 0.01);
  //song = loadSound("music/Im_tired.mp3", loaded)
  playlists = loadImage("images/playlist.jpg");
  playlistSeason1 = loadImage("images/playlist_1.jpg");
  playlistSeason2 = loadImage("images/playlist_2.jpg");
  playlistFansFavorite = loadImage("images/playlist_3.jpg");
  startScreen = loadImage("images/start.jpg");
  songFiles = songInfo.map(({
    file,
    img
  }) => {
    return {
      songInfo: loadSound(file),
      imgInfo: loadImage(img),
    }
  })
  songFiles.forEach((song, i) => {
    if (i < 5) playlist0.push(song);
    else if (i > 4 && i < 10) playlist1.push(song);
    else playlist2.push(song);
  })
}



/*function loaded() {
  song.play();
}
*/

function draw() {
  background(0);
  //song.setVolume(slider.value());
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
    } else if (dist(mouseX, mouseY, 813, 150) < 90) {
      interface = 3;
    } else if (dist(mouseX, mouseY, 448, 503) < 90) {
      interface = 4;
    }
  } else {
    if (mouseX > 71 && mouseX < 171 && mouseY > 68 && mouseY < 133) {
      interface = 1;
    }
  }
  /////playlist season 1

  //all for us canción
  if (interface === 2) {
    if (dist(mouseX, mouseY, 484, 107) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[0].songInfo;
        songI = 0;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 586, 101) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[0].songInfo;
        songI = 0;
        song.play();
      }
    } //formula canción
    if (dist(mouseX, mouseY, 483, 186) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[1].songInfo;
        songI = 1;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 575,191) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[1].songInfo;
        songI = 1;
        song.play();
      }
    }
    //When i r.p.i canción
    if (dist(mouseX, mouseY, 483,276) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 579,274) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    //still dont know my name canción
    if (dist(mouseX, mouseY, 484,359) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[3].songInfo;
        songI = 3;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 585,356) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[3].songInfo;
        songI = 3;
        song.play();
      }
    }
    //mount everest canción
    if (dist(mouseX, mouseY, 484,443) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[4].songInfo;
        songI = 4;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 579,441) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 2) {
        song = playlist0[4].songInfo;
        songI = 4;
        song.play();
      }
    }
  }
  ///////Playlist season 2
  //I'm tired
  if (interface === 3) {
    if (dist(mouseX, mouseY, 445, 91) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[0].songInfo;
        songI = 0;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 548,95) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[0].songInfo;
        songI = 0;
        song.play();
      }
    } 
    ///elliot song
    if (dist(mouseX, mouseY, 448,176) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[1].songInfo;
        songI = 1;
        song.play();
      }
    } 
    if (dist(mouseX, mouseY, 545,184) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[1].songInfo;
        songI = 1;
        song.play();
      }
    }
    ///pick me up
    if (dist(mouseX, mouseY, 445,265) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 548,266) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    ///lo vas a olvidar
    if (dist(mouseX, mouseY, 444,341) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[3].songInfo;
        songI = 3;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 559,353) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[3].songInfo;
        songI = 3;
        song.play();
      }
    }
    ///watercolor eyes
    if (dist(mouseX, mouseY, 444,429) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[4].songInfo;
        songI = 4;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 550,535) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 3) {
        song = playlist1[4].songInfo;
        songI = 4;
        song.play();
      }
    }
  } 
  ////playlist fans
  if (interface === 4) {
    if (dist(mouseX, mouseY, 457,134) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[0].songInfo;
        songI = 0;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 543,132) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[0].songInfo;
        songI = 0;
        song.play();
      }
    }
    //stand by me
    if (dist(mouseX, mouseY, 459,222) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[1].songInfo;
        songI = 1;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 553,222) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[1].songInfo;
        songI = 1;
        song.play();
      }
    }
    ///yeh i fucking did it
    if (dist(mouseX, mouseY, 458,307) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 538,305) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[2].songInfo;
        songI = 2;
        song.play();
      }
    }
    ///all for us
    if (dist(mouseX, mouseY, 454,392) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[3].songInfo;
        songI = 3;
        song.play();
      }
    }
    if (dist(mouseX, mouseY, 550,397) < 10) {
      console.log("si");
      if (song) song.stop();
      if (interface === 4) {
        song = playlist2[3].songInfo;
        songI = 3;
        song.play();
      }
    }
  }
}

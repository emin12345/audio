const tracks = [
  {
    name: "Alone_-_Color_Out.mp3",
    path: "1.mp3",
    image: "aloneee.jpg",
  },
  {
    name: "Tab_-_Sake_Bomb_(feat._Jade_Gritty_&amp;_Aurc).mp3",
    path: "2.mp3",
    image: "sake.jpg",
  },
  {
    name: "LEEONA_-_LEEONA_-_Do_I.mp3",
    path: "3.mp3",
    image: "Leona_11.jpg",
  },
];

const player = document.getElementById("audioPlayer");
const image = document.getElementById("sekil");
const playIcon = document.querySelector("#play>i");
const h3 = document.querySelector("h3");
let currentTrackIndex = 0;
let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    stopTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  player.play();
  isPlaying = true;
  playIcon.classList.remove("fa-play");
  playIcon.classList.add("fa-pause");
}

function stopTrack() {
  player.pause();
  isPlaying = false;
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
}

function switchTrack() {
  player.src = tracks[currentTrackIndex].path;
  image.src = tracks[currentTrackIndex].image;
  h3.innerText = tracks[currentTrackIndex].name;
  stopTrack();
}



function nextTrack() {
  if (currentTrackIndex < tracks.length - 1) {
    currentTrackIndex++;
  } else {
    currentTrackIndex = 0;
  }
  switchTrack();
}

function prevTrack() {
  if (currentTrackIndex > 0) {
    currentTrackIndex--;
  } else {
    currentTrackIndex = tracks.length - 1;
  }
  switchTrack();
}

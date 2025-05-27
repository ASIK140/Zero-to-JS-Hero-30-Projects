const music_list = [
  {
    name: "BESOS",
    artist: "Shreya Ghosal, Karl Wine",
    src: "./Media/BESOS.mp3",
  },
  {
    name: "Qatal",
    artist: "Guru Randhawa",
    src: "./Media/Qatal.mp3",
  },
  {
    name: "Sahiba",
    artist: "Jasleen, Stebin, Vijay",
    src: "./Media/Sahiba.mp3",
  },
];

const thum_image = document.getElementById("thum_image");
const music_name = document.getElementById("music_name");
const artist = document.getElementById("artists");
const music_range = document.getElementById("music_range");
const start_time = document.getElementById("start");
const end_time = document.getElementById("end");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");
let music_index = 0;
let isPlaying = false;
function showDetails() {
  const name = music_list[music_index].name;
  const music_artist = music_list[music_index].artist;
  music_name.textContent = name;
  artist.textContent = music_artist;
  audio.src = music_list[music_index].src;
}
function playSong() {
  isPlaying = true;
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  audio.play();
}
function pauseSonge() {
  isPlaying = false;
  playBtn.innerHTML = `<i style="padding-left: 5px;" class="fa-solid fa-play"></i>`;
  audio.pause();
}
function togglePaly() {
    thum_image.classList.toggle("play")
  if (isPlaying) {
    pauseSonge();
  } else {
    playSong();
  }
}

function nextPlay() {
  if (music_index < music_list.length) {
    music_index++;
    showDetails();
    audio.play();
  }
}
function prevPlay() {
  if (music_index >= 0) {
    music_index--;
    showDetails();
    audio.play();
  }
}

function updateBar() {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  music_range.value = `${progressPercent}`;

  const durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  if (durationSeconds) {
    end_time.textContent = `${durationMinutes}:${durationSeconds}`;
  }
  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  start_time.textContent = `${currentMinutes}:${currentSeconds}`;
  if(duration===currentTime){
    nextPlay()
  }
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

nextBtn.addEventListener("click", nextPlay);
prevBtn.addEventListener("click", prevPlay);
playBtn.addEventListener("click", togglePaly);
music_range.addEventListener("click",setProgress)
showDetails();
audio.addEventListener("loadedmetadata", updateBar);
audio.addEventListener('timeupdate', updateBar);
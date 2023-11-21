const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const imagen = document.getElementById('imagen');
const volumeSlider = document.getElementById('volume-slider');

const image=[
  '../images/310 - la banda del 5.jpg',
  '../images/la ocasion.jpg',
  '../images/me niegas.jpg',
  '../images/diego daza - que vuelva.jpg',
]

let imgNext=0;

const songs = [ 
  '../audio/310 - La Banda Del 5 Feat. Diego Daza(MP3_128K).mp3',
  '../audio/La Ocasión - De La Ghetto_ Arcangel_ Ozuna_ Anuel Aa_ Dj Luian_ Mambo Kingz [Video Oficial](MP3_70K).mp3',
  '../audio/Me Niegas - Baby Rasta y Gringo (Letra)(MP3_128K).mp3',
  '../audio/Que Vuelva - Diego Daza _ Carlos Rueda(MP3_128K).mp3',
];

let SongIndex = 0;

const nombreSong = [
  '310-La Banda Del 5','La Ocasión','Me Niegas','Que Vuelva'
];

let nombreIndex = 0;

const titulo = document.getElementById('nombre');
// Función para pasar a la siguiente canción
function nextSong() {
  SongIndex++;
  imgNext++;
  nombreIndex++;
  if (SongIndex >= songs.length) {
    imgNext = 0;
    SongIndex = 0;
    nombreIndex = 0;
  }
  audio.src = songs[SongIndex];
  imagen.src = image[imgNext];
  titulo.innerHTML = nombreSong[nombreIndex];
  audio.play();
}

// Función para retroceder a la canción anterior
function prevSong() {
  SongIndex--;
  imgNext--;
  nombreIndex--;
  if (SongIndex < 0) {
    imgNext = image.length - 1;
    SongIndex = songs.length - 1;
    nombreIndex = nombreSong.length - 1;
  }
  audio.src = songs[SongIndex];
  imagen.src = image[imgNext]
  titulo.innerHTML = nombreSong[nombreIndex];
  audio.play();
}
volumeSlider.addEventListener('input', function() {
    const volumeValue = parseFloat(volumeSlider.value);
    audio.volume = volumeValue;
});

playBtn.addEventListener('click', function() {
  audio.play();
});

pauseBtn.addEventListener('click', function() {
  audio.pause();
});

prevBtn.addEventListener('click', function() {
  prevSong();
});

nextBtn.addEventListener('click', function() {
  nextSong();
});

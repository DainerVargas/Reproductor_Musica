var audio = document.getElementById('audio-player');
var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var imagen = document.getElementById('imagen');
var volumeSlider = document.getElementById('volume-slider');

var image=[
  '../images/310 - la banda del 5.jpg',
  '../images/la ocasion.jpg',
  '../images/me niegas.jpg',
  '../images/diego daza - que vuelva.jpg',
]

var imgNext=0;

var songs = [ 
  '../audio/310 - La Banda Del 5 Feat. Diego Daza(MP3_128K).mp3',
  '../audio/La Ocasión - De La Ghetto_ Arcangel_ Ozuna_ Anuel Aa_ Dj Luian_ Mambo Kingz [Video Oficial](MP3_70K).mp3',
  '../audio/Me Niegas - Baby Rasta y Gringo (Letra)(MP3_128K).mp3',
  '../audio/Que Vuelva - Diego Daza _ Carlos Rueda(MP3_128K).mp3',
];

var SongIndex = 0;

// Función para pasar a la siguiente canción
function nextSong() {
  SongIndex++;
  imgNext++;
  if (SongIndex >= songs.length) {
    imgNext = 0;
    SongIndex = 0; // Vuelve a la primera canción si llega al final
  }
  audio.src = songs[SongIndex];
  imagen.src = image[imgNext];
  audio.play();
}

// Función para retroceder a la canción anterior
function prevSong() {
  SongIndex--;
  imgNext--;
  if (SongIndex < 0) {
    imgNext = image.length - 1;
    SongIndex = songs.length - 1; // Retrocede a la última canción si está en la primera
  }
  audio.src = songs[SongIndex];
  imagen.src = image[imgNext]
  audio.play();
}
volumeSlider.addEventListener('input', function() {
    var volumeValue = parseFloat(volumeSlider.value);
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

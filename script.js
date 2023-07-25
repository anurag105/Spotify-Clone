let playbutton=document.getElementById('playbutton');
let previousbutton=document.getElementById('previousbutton');
let nextbutton=document.getElementById('nextbutton');
let songindex=0;
let audioelement=new Audio("songs/1.mp3");
let gif=document.getElementById('gif');
let progressbar=document.getElementById('progressbar');
let currentsongname = document.getElementById('currentsongname');
let songitem= Array.from(document.getElementsByClassName('song'));
//let songitemplay = document.getElementsByClassName('songitemplay');
let songs=[
  { songname: "The Nights" , filepath : "songs/1.mp3" , thumbnailpath: "thumbnail/1.png"},
  { songname: "Moral Of The Story" , filepath : "songs/2.mp3" , thumbnailpath: "thumbnail/2.png"},
  { songname: "Dandelions" , filepath : "songs/3.mp3" , thumbnailpath: "thumbnail/3.png"},
  { songname: "505" , filepath : "songs/4.mp3" , thumbnailpath: "thumbnail/4.png"},
  { songname: "Bad Guy" , filepath : "songs/5.mp3" , thumbnailpath: "thumbnail/5.png"},
  { songname: "Can We Kiss Forever" , filepath : "songs/6.mp3" , thumbnailpath: "thumbnail/6.png"},
  { songname: "Sidewalks" , filepath : "songs/7.mp3" , thumbnailpath: "thumbnail/7.png"},
  { songname: "On & On" , filepath : "songs/8.mp3" , thumbnailpath: "thumbnail/8.png"}
]

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
songitem.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].thumbnailpath;
  element.getElementsByClassName("songtitle")[0].innerText=songs[i].songname;
})

 playbutton.addEventListener('click',()=>{
   if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    gif.style.opacity=1;
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
   }
  else{
    audioelement.pause();
    gif.style.opacity=0;
    playbutton.classList.remove('fa-circle-pause');
    playbutton.classList.add('fa-circle-play');
  }
  })

  //UPDATING THE PROGRESS BAR
audioelement.addEventListener('timeupdate',()=>{
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
progressbar.value= progress;
})


progressbar.addEventListener('change',()=>{
  audioelement.currentTime = progressbar.value* audioelement.duration/100
})
console.log(audioelement.duration);
console.log(audioelement.currentTime);


//PLAYING SONGS FROM PLAY BUTTON IN SONG LIST


const makeallplay = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
  })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    if(audioelement.paused || audioelement.currenttime) {
      makeallplay();
      songindex = parseInt(e.target.id);
      audioelement.src = `songs/${songindex+1}.mp3`;
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      currentsongname.innerText = songs[songindex].songname;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
      playbutton.classList.remove('fa-circle-play');
      playbutton.classList.add('fa-circle-pause');
    }
    else{
      makeallplay();
      songindex = parseInt(e.target.id);
      audioelement.src = `songs/${songindex+1}.mp3`;
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      currentsongname.innerText = songs[songindex].songname;
      audioelement.pause();
      gif.style.opacity=0;
      playbutton.classList.remove('fa-circle-pause');
      playbutton.classList.add('fa-circle-play');
    }
  })
})
//nextbutton
nextbutton.addEventListener('click',()=>{
  if(songindex>6){
    songindex=0
  }
  else{
    songindex+=1;
  }
  audioelement.src = `songs/${songindex+1}.mp3`;
      currentsongname.innerText = songs[songindex].songname;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
    makeallplay();
})
//previousbutton
previousbutton.addEventListener('click',()=>{
    if(songindex<=0){
      songindex=0
    }
    else{
      songindex-=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
        currentsongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        makeallplay();
      
  })

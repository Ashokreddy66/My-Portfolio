console.log("Welcome to spotify");
let songindex = 0;
let audoelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songs=[
    {songname:"Kaun Tujhe",filepath:"songs/1.mp3",coverpath:"covers/1.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/2.mp3",coverpath:"covers/2.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/3.mp3",coverpath:"covers/3.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/4.mp3",coverpath:"covers/4.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/5.mp3",coverpath:"covers/5.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/6.mp3",coverpath:"covers/6.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/7.mp3",coverpath:"covers/7.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/8.mp3",coverpath:"covers/8.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/9.mp3",coverpath:"covers/9.jpeg"},
    {songname:"Kaun Tujhe",filepath:"songs/10.mp3",coverpath:"covers/10.jpeg"},
]
let audioelement=new Audio('1.mp3');
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTimes<=0){
        audioelement.play();
        masterplay.classList.remove(' fa-play');
          masterplay.classList.add(' fa-pause');
          gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
       masterplay.classList.remove(' fa-pause');
          masterplay.classList.add(' fa-play');
          gif.style.opacity=0;
        
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    prograss = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
})
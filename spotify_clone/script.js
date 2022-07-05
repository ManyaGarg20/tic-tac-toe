  console.log("welcome");
 
  //initialise variables
  let index= 0;
  let audioElement = new Audio('songs/1.mp3');
  let masterPlay = document.getElementById('masterPlay');
  let myProgressBar= document.getElementById('myProgressBar');

  let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let playingSong=document.getElementById("playingSong");
playingSong.innerHTML+="Tera Hone Laga Hoon";

   //array of objects to store name and path of songs
  let songs=[
    {songName: "Tera Hone Laga Hoon",filePath: "songs/1.mp3",coverPath: "pics/1.jpg" },
    {songName: "Tu jaane naa",filePath: "songs/2.mp3",coverPath: "pics/2.jpg" },
    {songName: "Bakhuda tumhi ho",filePath: "songs/3.mp3",coverPath: "pics/3.jpg" },
    {songName: "Aa bhi jaa sanam",filePath: "songs/4.mp3",coverPath: "pics/4.jpg" },
    {songName: "Tere liye",filePath: "songs/5.mp3",coverPath: "pics/5.jpg" },
    {songName: "Be intehaan",filePath: "songs/6.mp3",coverPath: "pics/6.jpg" },
    {songName: "Pehli nazar mein",filePath: "songs/7.mp3",coverPath: "pics/7.jpg" },
    {songName: "tere sang yaara",filePath: "songs/8.mp3",coverPath: "pics/8.jpg" },
    {songName: " Piya o re piya",filePath: "songs/9.mp3",coverPath: "pics/9.jpg" },
    {songName: " Dil diyan gallan",filePath: "songs/10.mp3",coverPath: "pics/10.jpg" }
  ]
  
// add play/pause
masterPlay.addEventListener('click' , ()=>{
  if(audioElement.paused || audioElement.currentTime<0){

    audioElement.play();
    masterPlay.classList.remove('fa-circle-play'); //remove play icon 
    masterPlay.classList.add('fa-circle-pause'); //add pause icon
    gif.style.opacity=1;
  }
  else if(audioElement.play()){
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause'); //remove play icon 
    masterPlay.classList.add('fa-circle-play'); //add pause icon
    gif.style.opacity=0;
  }
})

  // when someone changes time of song , timeupdate event executes
audioElement.addEventListener('timeupdate',()=>{
     //now relate progress to duration of time song is played
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ; //percent of song played
    console.log(progress);
    myProgressBar.value = progress;
    if(progress==100){
      index+=1;
      audioElement.src = `songs/${index}.mp3`;
  playingSong.innerHTML = songs[index-1].songName;
  audioElement.currentTime=0;
  audioElement.play();
     }
  })
 
  myProgressBar.addEventListener('change' , ()=>{
audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100; // if progress bar is manually changed then audio also shifts by using formula
  })
  
const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

songItems.forEach((element,i) => {
    //select  first img tag of each element of sonItem and then add src 
  element.getElementsByTagName("img")[0].src= songs[i].coverPath;
  element.getElementsByTagName("span")[0].innerText= songs[i].songName;

}); 

// play songs when selected
Array.from(document.getElementsByClassName('songPlay')) .forEach((element)=>{
  element.addEventListener('click' , (e)=>{

    makeAllPlay(); // make those play which are not playing 

    if(audioElement.paused || audioElement.currentTime<0){
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
        //to identify which song is playing and then play that song
    index =parseInt(e.target.id);
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1; 
    playingSong.innerHTML = songs[index-1].songName;
    }

        else if(audioElement.play()){
      audioElement.pause();
     e.target.classList.remove('fa-circle-pause'); //remove play icon 
     e.target.classList.add('fa-circle-play'); //add pause icon
     masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play'); 
    gif.style.opacity=0;
    }
      })
})

document.getElementById('next').addEventListener('click',()=>{
  if(index>=10){
    index=1;
  }
  else 
  {
    index+=1;
  }
  audioElement.src = `songs/${index}.mp3`;
  playingSong.innerHTML = songs[index-1].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause'); 
})

document.getElementById('prev').addEventListener('click',()=>{

  if(index<=1){
    index=10;
  }
  else{
    index -=1;
  } 
  audioElement.src = `songs/${index}.mp3`;
  playingSong.innerHTML = songs[index-1].songName;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause'); 

})


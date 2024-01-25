document.addEventListener("DOMContentLoaded", () => {


    
    
    const skip_btn1 = document.querySelector(".container .info .controls svg:nth-child(1)");
    const skip_btn2  = document.querySelector(".container .info .controls svg:nth-child(3)");
    const pause_btn  = document.querySelector(".container .info .controls .play_pause svg:first-child")
    const play_btn  = document.querySelector(".container .info .controls .play_pause svg:nth-child(2)")
    const timeprogress = document.querySelector(".container .info .progress .time span:first-child")
    const maxprogress = document.querySelector(".container .info .progress .time span:nth-child(2)")
    
    const song = document.getElementById("song");

    song.onloadedmetadata = function (){
    }
    console.log("loaded metadata", song.currentTime);
    timeprogress.textContent = song.currentTime
    maxprogress.textContent = song.duration
    console.log(timeprogress)
    const img = document.querySelector(".container div img");
    skip_btn1.addEventListener("click", () =>{
      change_cover(img)
    })
    skip_btn2.addEventListener("click", () =>{
        change_cover(img)
    })

    pause_btn.addEventListener("click", () =>{
        console.log("here")
       play_btn.classList.remove("remove");
       pause_btn.classList.add("remove");
       song.play();
       
    })
    play_btn.addEventListener("click", () =>{
        console.log("there")
        play_btn.classList.add("remove");
        pause_btn.classList.remove("remove");
        song.pause();
    })
    // play_pause_btn.clearEventListener("click", () =>{});
})


const change_cover = (img) => {
    
    const covers = ["./images/cover-2.png", "./images/cover-1.png"]
    const songs = ["./images/forest-lullaby-110624.mp3","./images/lost-in-city-lights-145038.mp3" ]
    const titles = ["Lost in the City Lights", "Forest Lullaby"]
    const sub_titles = ["Cosmo Sheldrake", "Lesfm"]
    const Title_song =  document.querySelector(".container .info  .title h1")
    const sub_title =  document.querySelector(".container .info  .title h5")
    
    if(img.src === "http://127.0.0.1:5500/images/cover-1.png")
    {
        Title_song.textContent = titles[1];
        sub_title.textContent = sub_titles[1];
        img.src  =  covers[0];
        song.src = songs[0];


    }
    else 
    {
        Title_song.textContent = titles[0];
        sub_title.textContent = sub_titles[0];
        img.src  = covers[1];
        song.src = songs[1];
    }

}

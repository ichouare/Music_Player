document.addEventListener("DOMContentLoaded", () => {


    
    
    const skip_btn1 = document.querySelector(".container .info .controls svg:nth-child(1)");
    const skip_btn2  = document.querySelector(".container .info .controls svg:nth-child(3)");
    const img = document.querySelector(".container div img");
    skip_btn1.addEventListener("click", () =>{
      change_cover(img)
    })
    skip_btn2.addEventListener("click", () =>{
        change_cover(img)
    })
    // play_pause_btn.clearEventListener("click", () =>{});
})


const change_cover = (img) => {
    
    const covers = ["./images/cover-2.png", "./images/cover-1.png"]
    const titles = ["Lost in the City Lights", "Forest Lullaby"]
    const sub_titles = ["Cosmo Sheldrake", "Lesfm"]
    const Title_song =  document.querySelector(".container .info  .title h1")
    const sub_title =  document.querySelector(".container .info  .title h5")
    
    if(img.src === "http://127.0.0.1:5500/images/cover-1.png")
    {
        Title_song.textContent = titles[1];
        sub_title.textContent = sub_titles[1];
        img.src  =  covers[0];

    }
    else 
    {
        Title_song.textContent = titles[0];
        sub_title.textContent = sub_titles[0];
        img.src  = covers[1];
    }

}

    let previous=document.querySelector('#pre');
    let play=document.querySelector('#play');
    let next=document.querySelector('#next');
    let title=document.querySelector('#title');
    let artist=document.querySelector('#artist');
    let slider=document.querySelector('#duration');
    let track_image=document.querySelector('#track_image');
    
let timer;
let autoplay=1;
let indexno=0;
let playing_song=false;

let track=document.createElement('Audio');
let All_song=[
    {
        name:"yethi Yethi.wav",
        Path:"music/Yethi Yethi.WAV",
        img:"img/yethi.jpg",
        artist:"haris jayaraj"
    },
    {
        name:"Toofan.flac",
        Path:"music/Toofan.flac",
        img:"img/toofan.jpg",
        artist:"Ravi Basrur"
    },
    {
        name:"Marudaani.wav",
        Path:"music/Marudaani.WAV",
        img:"img/marudaani.jpg",
        artist:"AR Rahman"
    },
    {
        name:"Enthaaraa.flac",
        Path:"music/Enthaaraa.flac",
        img:"img/enthaara.jpg",
        artist:"AR Rahman"
    }
];
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src=All_song[index_no].Path;
    title.innerHTML=All_song[index_no].name;
    artist.innerHTML=All_song[index_no].artist;
    track_image.src=All_song[index_no].img;
    timer=setInterval(Range.slider,1000)
    
};
load_track(indexno);
function justplay(){
    if (playing_song==false) {
        playsong();
        
    } 
    else{
        pausesong();
    }
};
function reset_slider(){
    slider.value=0;
};
function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML=`<i class="fa fa-pause"></i>`
};
function pausesong(){
    track.pause();
    playing_song=false;
    play.innerHTML=`<i class="fa fa-play"></i>`
};
function next_song(){
    if(indexno<All_song.length -1){
        indexno+=1;
        load_track(indexno);
        playsong();
    }
    else{
        indexno=0;
        load_track(indexno);
        playsong();
    }
    
};
function previous_song(){
    if(indexno>0){
        indexno-=1;
        load_track(indexno);
        playsong();
    }
    else{
        indexno=All_song.length;
        load_track(indexno);
        playsong();
    }
    
};
function change_duration(){
    slider_position=track.duration*(slider.value/100);
    track.currentTime=slider_position;
}




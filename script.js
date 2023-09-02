var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '635',
    width: '640',
    
    playerVars: {
      'listType': "playlist",
      "list": "PLsGH4IgLsAlg45rmFJk5O52fyIaOUIb7E",
      "rel": 0,
      "modestbranding" : 2
    },   
  });
}
    var isVideoPlaying = false;
    var videoScreen = document.getElementById("screenOff"); 
  
    function toogleOnOff(){
      if (isVideoPlaying){
        pauseVideo();
      }else{
        playVideo();
      }
    }

    function playVideo(){
      player.playVideo();
      isVideoPlaying = true;
      videoScreen.style.display = "none";
    }

    function pauseVideo(){
      player.pauseVideo();
      isVideoPlaying = false;
      videoScreen.style.display="block";
    }

    var powerButton = document.getElementById("powerButton");
    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');
    
    powerButton.addEventListener("click",toogleOnOff);
    nextButton.addEventListener("click", playNextVideo);
    prevButton.addEventListener("click", playPreviousVideo);
   

    function playNextVideo(){
    if (isVideoPlaying=true){
      player.nextVideo();
    }else playNextVideo.disable=true;
    
    
    }
 
    function playPreviousVideo(){
    if (isVideoPlaying=true){
      player.previousVideo();
    }else playPreviousVideo.disable=true;  
    
    }



    document.addEventListener("DOMContentLoaded", function(){
      var antenna1 = document.getElementById("antenna1");
      var antenna2 = document.getElementById("antenna2");
      var screenGlitch = document.getElementById("screenGlitch")
     
      antenna1.addEventListener("click", function(){
          showGlitch();
      });

      antenna2.addEventListener("click", function(){
          showGlitch();
      });

      function showGlitch(){
        screenGlitch.style.display="block";
        setTimeout(function(){
        screenGlitch.style.display="none";
          
        },500);
      }

    });

    

    
   




         


      
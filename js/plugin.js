
function vidFade(){vid.classList.add("stopfade")}var vid=document.getElementById("ppvideo"),pauseButton=document.querySelector("#polina button");vid.playbackRate=.8,vid.addEventListener("ended",function(){vid.pause(),vidFade()}),pauseButton.addEventListener("click",function(){vid.classList.toggle("stopfade"),vid.paused?(vid.play(),pauseButton.innerHTML='<i class="fa fa-pause fa-4x"></i>',$(".video-area").addClass("in")):(vid.pause(),pauseButton.innerHTML='<i class="fa fa-play fa-5x"></i>',$(".video-area").removeClass("in"))});
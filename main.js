var Controller = (function() {
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
    }
  
    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      this.classList.remove("playing");
    }
  
    return {
      playSound: playSound,
      removeTransition: removeTransition
    };
  })();
  
  const keys = document.querySelectorAll(".key");
  keys.forEach(key =>key.addEventListener("transitionend", Controller.removeTransition));
  
  window.addEventListener("keydown", Controller.playSound);
  
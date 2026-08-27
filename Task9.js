intervalobj = setInterval(()(
 const remaining secondsBetween (new Date(), end);
 if (remaining <= 0) {
   clearInterval(intervalobj);
   console.log("Countdown: Os remaining");
   setTimeout((){
     console.log(" Time's up!");
    }, 0);
    return;
  }

console.log( Only $(remaining) sec left, hang tight!");
}, 1000);

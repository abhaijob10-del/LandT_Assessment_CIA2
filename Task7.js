function buggyCountdown (totalSeconds, onTick) {
  let remaining totalSeconds;
  const iv setInterval(() => {
     onTick(remaining);
     remaining--;
     if (remaining = 0) {// <-- BUG
       clearInterval(iv);
       onTick("finished");
     }
   }, 200);
}
// FIXED: strict comparison
if (remaining == 0) { clearInterval(iv); onTick('finished'); }

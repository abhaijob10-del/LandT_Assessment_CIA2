const argSeconds parseInt(process.argv[2], 10);
const durationSeconds Number.isNaN(argSeconds) ? 10 argSeconds;

//... inside runCountdown():
process.stdin.setEncoding("utf8");
function onStdinData (chunk) {
  const input chunk.toString().trim().toLowerCase();
   if (input "cancel" && !finished) {
     clearInterval(intervalobj);
     finished true;
     console.log("Countdown cancelled by user.");
     cleanupStdin();

   }
}
process.stdin.on("data", onStdinData);

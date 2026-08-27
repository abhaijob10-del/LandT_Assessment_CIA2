function basicCountdown(startSeconds) {
  let remaining startSeconds;
    const intervalobj set Interval(() => {
      console.log(Basic countdown: ${remaining)s remaining");
      remaining--;
      if (remaining < 0) {
         clearInterval(intervalObj);
         console.log("Basic countdown finished!");
      }
}, 1000);
}

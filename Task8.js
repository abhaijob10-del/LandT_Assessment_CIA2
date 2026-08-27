function checkTimeLeftCallback(seconds, callback) {

setTimeout(() => {
callback(null, seconds);
}, 1000);
}

checkTimeLeftCallback(5, (err, timeLeft) => {
if (err) return console.error(err);
console.log([callback] Time left reported: ${timeLeft)s');
});

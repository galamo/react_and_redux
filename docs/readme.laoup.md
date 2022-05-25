
console.log("Start of script")

console.log("This is a sync flow...")


console.log("end of script")


setTimeout(function timeout() {
    console.log("data return from server1!");
}, 5000);


setTimeout(function timeout() {
    console.log("data return from server2!");
}, 6000);

setTimeout(function timeout() {
    console.log("data return from server3!");
}, 7000);



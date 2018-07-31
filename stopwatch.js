const stdin = process.openStdin();
// this example takes 2 seconds to run
var start = Date.now();

stdin.addListener("data", d => {
    if (d.toString().trim() === "stop") {
        setTimeout(() => {
            let millis = Date.now() - start;
            console.log("seconds elapsed = " + Math.floor(millis/1000));
        })
    }
}, 0000);

//  setTimeout(function() {
//   var millis = Date.now() - start;

//   console.log("seconds elapsed = " + Math.floor(millis/1000));
//   // expected output : seconds elapsed = 2
// }, 2000); 

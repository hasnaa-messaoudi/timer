//node timer1.js 10 3 5 15 9 

let a = process.argv.splice(2,process.argv.length - 2).map(function(item) {
  return parseInt(item, 10);
}).sort((a,b)=>a-b);


for (let slot of a) {
  if (slot > 0 && slot !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, slot * 1000);
  }
  
}








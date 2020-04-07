// const timers = process.argv.slice(2);

// for(const timer of timers) {

//   if(Number(timer) && Number(timer) >= 0) {
//     //using . instead of '\x07' because system beep disabled on my computer
//     setTimeout(() => process.stdout.write('.'), Number(timer) * 1000);
//   }
//   //else skip
// }


const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  if(key === 'b') {
    console.log('beep!');
  }
  if (key > 0 && key < 10) {
    console.log(`Setting timer for ${key} seconds..`);
    setTimeout(() => console.log('beep!'), key * 1000);
  }
  if (key === '\u0003') {
    console.log('Thank you for using me, ciao!');
    process.exit();
  }
});


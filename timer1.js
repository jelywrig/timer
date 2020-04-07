const timers = process.argv.slice(2);

for(const timer of timers) {

  if(Number(timer) && Number(timer) >= 0) {
    //using . instead of '\x07' because system beep disabled on my computer
    setTimeout(() => console.log('.'), Number(timer) * 1000);
  }
  //else skip
}


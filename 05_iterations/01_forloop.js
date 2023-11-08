// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
      console.log(`${element} is best number`);
    }
    console.log(element);
  }
  // not accessible outside of scope
  // console.log(index);
  // console.log(element);
  
  for (let i = 1; i <= 10; i++) {
      // console.log(`Outer loop value ${i}`);
      console.log(`Table of ${i}`);
    for (let j = 1; j < 10; j++) {
      // console.log(`Inner loop value ${j} & inner loop ${i}`);
      console.log(i + "*" + j + "=" + i*j);
    }
  }
  
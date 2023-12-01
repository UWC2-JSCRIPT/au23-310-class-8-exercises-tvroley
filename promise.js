let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

myPromise
  .then(function() {
    return 99;
  })
  .then(function(number) {
    console.log(number);
  });

const randomNumberJudge = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const number = Math.random();
    if(number > 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

randomNumberJudge.then(function() {
  console.log('success');
}).catch(function() {
  console.log('fail');
}).finally(function() {
  console.log('complete');
});
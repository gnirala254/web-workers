self.onmessage((event) => {
    console.log('event on worker', event);
    let sum = 0;

    for (let i = 1; i < 10000000000; i++) {
        sum += i;
    }

    self.postMessage(sum);
})
// web worker is simply a JS process that runs in the background of a web page.
// JS by default is single threaded, there is one thread or execution path and this thread is known as main thread
// the main thread is responsible for executing all the JS code for a webpage one line at a time
// a web workers is a seperate JS thread that allows you to execute multiple threads of JS in paralll with each other
// web workers can not perform any DOM manupulations, only main thread can access and manupulate the DOM


const worker = new Worker('');

const sumBtn = document.querySelector('#btn1');
const bgBtn = document.querySelector('#btn2');

sumBtn.addEventListener("click", ()=>{
    // post message to worker here
    worker.postMessage('Hello worker')
});

worker.onmessage((message)=>{
    console.log('event', message);
    alert('sum is, ', message.data)
})

bgBtn.addEventListener("click", ()=>{
    if (document.body.style.background !== 'green') {
        document.body.style.background = 'green'
    } else {
        document.body.style.background = 'blue'
    }
});
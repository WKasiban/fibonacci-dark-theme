
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


function newFib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


(function () {
    if (!console) {
        console = {};
    }
    const methodA = document.getElementById('result1');
    //const methodB = document.getElementById('result2');
    console.log = function (message) {
        methodA.innerHTML += message;
    }
})();

console.time('Method 1');
console.log(fib(20));
console.timeEnd('Method 1');

(function () {
    if (!console) {
        console = {};
    }
    //const methodA = document.getElementById('result1');
    const methodB = document.getElementById('result2');
    console.log = function (message) {
        methodB.innerHTML += message;
    }
})();

console.time('Method 2');
console.log(newFib(20));
console.timeEnd('Method 2');


/*
ฟังก์ชั่น เอาจาก console.log มาขึ้น html
(function () {
    if (!console) {
        console = {};
    }
    const methodA = document.getElementById('result1');
    console.log = function (message) {
        if (typeof message == 'object') {
            methodA.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            methodB.innerHTML += message + '<br />';
        }
    }
})();
*/
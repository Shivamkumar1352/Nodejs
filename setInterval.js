const repeatedFunction = () => {
    console.log('Repeated function executed!');
};
const intervalID = setInterval(repeatedFunction, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log('Interval stopped.')
}, 5000);
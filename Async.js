function parentFunction(name, callback){
    setTimeout(callback, 1000);
    console.log("Hey "+name);
}
parentFunction("Random String", randomFunction = () => { console.log("Hey I am callbackfunction");});

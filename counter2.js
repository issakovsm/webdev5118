
var createCounter = function(init) {
    let a = init
    return {
        increment:() => ++a,
        decrement:() => --a,
        reset:() => a = init,
    }
};

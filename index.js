function receivesAFunction(callme) {
    callme()
}
function returnsANamedFunction() {
    function namedFunction(){

    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return (blah) => blah;
}
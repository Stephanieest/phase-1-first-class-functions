function receivesAFunction (callback){
    return callback();
}
receivesAFunction(callback);

function returnsANamedFunction(){
    return function namedFunction (){

    }
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}

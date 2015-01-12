    ​
    // Note that we are using the apply () method, so the 2nd argument 
    // has to be an array—the arguments to pass to the appController.avg () method.​
    appController.avg.apply(gameController, gameController.scores);
​
    // The avgScore property was successfully set on the gameController object, 
    // even though we borrowed the avg () method from the appController object​
    console.log(gameController.avgScore); // 46.4​
​
    // appController.avgScore is still null; it was not updated, only 
    // gameController.avgScore was updated​
    console.log (appController.avgScore); // null
export default (logger:any) => {
    process.on('unhandledRejection', (reason:any, p) => {
//         console.log(' [antiCrash] :: Unhandled Rejection/Catch');
//         console.log(reason, p);

if(reason.errno == -3001){
    process.exit()
}

     });
     process.on("uncaughtException", (err:any, origin:any) => {
        let msg = ` [antiCrash] :: Uncaught Exception/Catch\nerr: ${err}\norigin: ${origin}`;
        logger.emit("error", msg);
       console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log('err:' + err,"origin:" + origin);
     }) 
     process.on('uncaughtExceptionMonitor', (err:any, origin:any) => {
        let msg = ` [antiCrash] :: Uncaught Exception/Catch\nerr: ${err}\norigin: ${origin}`;
        logger.emit("error", msg);
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
       console.log(err, origin);
     });
     process.on('multipleResolves', (type, promise, reason) => {
            let msg = ` [antiCrash] :: Multiple Resolves\nType: ${type}\nPromise: ${promise}\nReason: ${reason}`;
            logger.emit("error", msg);
         console.log(' [antiCrash] :: Multiple Resolves');
         console.log(type, promise, reason);
     }); //we dont want to mess with async errors, cause they wont stop the proccess (i hope)
 }
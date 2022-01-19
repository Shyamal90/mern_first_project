const app = require("./app");
const connect = require("./configs/db");


app.listen(4000,async()=>{
    try {
        await connect();
        console.log("Connection Successful with port 4000");
    } catch (error) {
        console.log(error);
    }
})
const app = require("./app");
const connect = require("./configs/db");
const PORT = 3333;

app.listen(PORT,async()=>{
    try {
        await connect();
        // console.log(`Connection with port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})
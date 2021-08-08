import app from "./app";
import connection from "./database";

const init = async () => {

    await connection();
    console.log("Database Connected");

    app.listen(app.get('port'), () => {
        console.log("Server running on port", app.get('port'))
    });
}
console.log(process.env.NODE_ENV)
init();
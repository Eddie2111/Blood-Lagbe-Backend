const listen = () => {
    console.log(`Listening on port ${process.env.PORT}`);
}
const errorRoute = {
    status:404,
    message: "route exists but will not operate. Are you authorized?",
    route: "/error"
}
const serverError = {
    status:500,
    message: "server error",
    route: "/error"
}
const success = {
    status:200,
    message:"data received"
}
//
module.exports = listen,errorRoute;
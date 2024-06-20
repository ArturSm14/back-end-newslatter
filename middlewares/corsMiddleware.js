export default function corsMiddleware(req, res , next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type, Accept");
    next();
}
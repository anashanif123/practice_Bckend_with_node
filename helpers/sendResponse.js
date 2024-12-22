export default function sendResponse(status, res, data, error, msg) {
 res.status(status).json({
    error,
    msg,
    data:data,
 })
}

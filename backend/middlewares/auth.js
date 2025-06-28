const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const auth = async (req, res, next) => {
    if (!process.env.JWT_SECRET) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'JWT_SECRET is not defined' });
    }
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: "INVALID AUTHORISATION" })
    }
    const token = authHeader.split(' ')[1].trim()

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user={userId:payload.userId,userName:payload.userName}
        next()
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: error })
    }
}
module.exports = auth

import pkg from 'jsonwebtoken';
import { UNAUTHORIZED } from "../constants/httpStatus.js";
const { verify } = pkg;

export default (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) {
        return res.status(UNAUTHORIZED).send();
    }
    try {

        const decoded = verify(token, 'SomeRandomText');
        req.user = decoded;
    } catch (error) {
        res.status(UNAUTHORIZED).send();
    }
    return next();

}
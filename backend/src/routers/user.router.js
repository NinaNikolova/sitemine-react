import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router();
// we use post usually when we want to send data to the server
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(generateTokenResponse(user));
        return;
    }
    res.status(BAD_REQUEST).send('Email или парола са грешни!')

})
const generateTokenResponse = user => {
    // the sign function is responsible for creating the token
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 'SomeRandomText', {
        expiresIn: '30d'
    })
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    }
}
export default router;

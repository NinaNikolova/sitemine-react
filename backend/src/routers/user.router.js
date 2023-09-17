import { Router } from "express";

const router = Router();
// we use post usually when we want to send data to the server
router.post('/login', (req, res) => {
    const { email, password } = req.body;

})
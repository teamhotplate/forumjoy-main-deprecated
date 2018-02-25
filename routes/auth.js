import passport from 'passport';
import { Router } from 'express';
import { User } from '../models';

const router = Router();

// User registration and login routes

router.get("/users", function (req, res) {
  User.find((err, data) => {
    console.log(data);
    res.json(data);
  });
});

export default router;


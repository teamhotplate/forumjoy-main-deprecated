//import farmhash from 'farmhash';
//import request from 'request';

import { Router } from 'express';

const router = Router();

router.get("/test", function (req, res) {
  res.json({"message": "Hello from the /api/test GET endpoint"})
});

export default router;
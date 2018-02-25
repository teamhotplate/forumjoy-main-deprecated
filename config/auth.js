import jwt from 'jsonwebtoken';
import passport from 'passport';
import passportJWT from 'passport-jwt';

import { User } from '../models';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWTSECRET;

const jwtStrategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  // TO DO (Adrian)
  // db.User.findOne({where: {id: jwt_payload.user_id}}).then( function(user) {
  //   console.log(JSON.stringify(user));
  //   if (!user) {
  //     console.log("In invalid creds handler. User was null.");
  //     return next(null, false, { message: 'Invalid user credentials.' });
  //   } else {
  //     console.log("In jwt success handler. User was not null.");
  //     return next(null, user);
  //   }
  // });
  return next(null, false, { message: 'Auth not yet implemented.' });
});

passport.use(jwtStrategy);

export default {}
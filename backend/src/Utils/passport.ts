import passport from "passport";
import {Strategy} from "passport-local"
import passportJWT from "passport-jwt"
import bcryptjs from "bcryptjs"
import {UsersModel} from '../ApiModels/user.model'

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const userModel = UsersModel()

if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret is not defined in .env")
}

// local strategy for username password login
passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user: any = await userModel.getUserLogin(username);
            if (user === undefined) {
                return done(null, false, {message: "Incorrect email or password"});
            }
            if (!bcryptjs.compareSync(password, user.password)) {
                return done(null, false, {message: "Incorrect email or password"});
            }
            return done(null, {...user.dataValues}, {message: "Logged In Successfully"}); // use spread syntax to create shallow copy to get rid of binary row type
        } catch (err) {
            return done(err);
        }
    })
);

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload: any, done: any) => {
        try {
            if (jwtPayload === undefined) {
                return done(null, false, {message: 'Incorrect Id.'})
            }
            return done(null, {...jwtPayload}, {message: 'Hello'});
        } catch (err) {
            return done(err);
        }
    }
));


export default passport
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI + process.env.MONGO_DB);

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    }
);

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;

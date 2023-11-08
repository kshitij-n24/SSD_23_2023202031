import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI + process.env.MONGO_DB);

const { Schema } = mongoose;

const TodoSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        dueDate: { type: Date, required: true },
        Status: { type: Boolean, required: true },
    }
);

const TodoModel = mongoose.model('TodoModel', TodoSchema);

export default TodoModel;

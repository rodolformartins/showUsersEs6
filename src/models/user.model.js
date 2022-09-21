import mongoose from 'mongoose'

export class UserModel {
    userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            minLength: 7,
        }
    });

    UserModel = mongoose.model("User", userSchema);
}




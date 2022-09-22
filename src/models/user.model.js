import mongoose from 'mongoose'

export class UserModel {

    userSchema() {
        const userSchema = new mongoose.Schema({
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
        return userSchema;
    }

    modelReturn() {
        return mongoose.model("User", this.userSchema());
    }


}










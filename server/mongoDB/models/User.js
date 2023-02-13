import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      validate: {
        validator: function (val) {
          return validator.isEmail(val);
        },
        message: (props) => console.log(`${props.value} is not a valid email`),
      },
    },

    password: {
      type: String,
      required: true,
      min: 5,
      validate: {
        validator: function (val) {
          return validator.isStrongPassword(val);
        },
        message: (props) =>
          console.log(`${props.value} is not a valid password`),
      },
    },

    picturePath: {
      type: String,
      default: "",
    },

    friends: {
      type: Array,
      default: [],
    },

    location: String,
    occupation: String,
    viewProfile: Number,
    impressions: Number,
  },
  {
    timestamps: true, // Gives automatic dates for when its created/updated...
  }
);

const User = mongoose.model("User", UserSchema);

export default User;

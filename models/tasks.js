const mongoose = require("mongoose");

// Following Mongoose architect
// SCHEMA => MODEL => QUERY

// Mongoose Schema
const tasksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadLine: {
      type: Date,
      required: true,
    },
   /*  name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [30, "Name too large"],
    }, */
    assigned: {
      type: String,
      required: true,
    },
  },
//   { timestamps: true }
);

// Mongoose Model
const Tasks = mongoose.model("Product", tasksSchema);

module.exports = Tasks;

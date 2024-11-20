import mongoose from "mongoose";

const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const topicModel =
  mongoose.models.Topics || mongoose.model("Topics", topicSchema);

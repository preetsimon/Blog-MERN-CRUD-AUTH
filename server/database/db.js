import mongoose from "mongoose";

const Connection = async (username, password) => {
     const URL = `mongodb+srv://${username}:${password}@cluster1.k1ucxgt.mongodb.net/Blog102?retryWrites=true&w=majority`

  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });

    console.log("database connected");
  } catch (error) {
    console.log("Error database connection ", error);
  }
};

export default Connection;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: false,                     // enable TLS
      tlsAllowInvalidCertificates: false // Atlas has valid certs
    });

    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose"

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://admin:admin123@cluster0.bcfdg.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

let db = mongoose.connection;

export default db;
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/gestiondocdb")
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.error(error));

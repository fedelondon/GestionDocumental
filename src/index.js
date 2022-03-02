import app from "./app";
import "./database";

const port = app.get("PORT");

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});

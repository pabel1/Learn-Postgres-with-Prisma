import { PrismaClient } from "@prisma/client";
import app from "./index";
const prisma = new PrismaClient();

const port = process.env.PORT || 4000;
async function main() {
  try {
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  } catch (error) {
    console.log(`${error}`);
  }
}

main();

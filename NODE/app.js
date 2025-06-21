import * as fs from "node:fs/promises";

try {
  const files = await fs.readdir("./");
  for (const file of files) console.log(file);
} catch (error) {
    console.log("error",error);
    
}

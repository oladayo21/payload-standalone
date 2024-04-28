import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload.generated.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGO_URL || "",
  }),
  //@ts-expect-error
  editor: null,
});

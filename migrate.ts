import {
  createClient,
  createWriteClient,
  createMigration,
} from "@prismicio/client";
import { createPrismicAuthManager } from "@slicemachine/manager";
import sm from "./slicemachine.config.json";

async function main() {
  const authManager = createPrismicAuthManager();
  const isLoggedIn = await authManager.checkIsLoggedIn();
  if (!isLoggedIn) throw new Error("Please log in first.");

  const originalClient = createClient("fizzi");
  const allDocuments = await originalClient.dangerouslyGetAll();

  const client = createWriteClient(sm.repositoryName, {
    writeToken: await authManager.getAuthenticationToken(),
  });

  const migration = createMigration();
  for (const document of allDocuments)
    migration.createDocument(document, "Home");

  await client.migrate(migration);
}

main();

import {
  createClient,
  createWriteClient,
  createMigration,
} from "@prismicio/client";
import { createPrismicAuthManager } from "@slicemachine/manager";
import sm from "./slicemachine.config.json";
import pkg from "./package.json";

main();

async function main() {
  const authManager = createPrismicAuthManager();
  const isLoggedIn = await authManager.checkIsLoggedIn();
  if (!isLoggedIn) {
    const sessionInfo = await authManager.getLoginSessionInfo();
    await authManager.nodeLoginSession({
      port: sessionInfo.port,
      onListenCallback() {
        console.log(
          `Open this URL in your browser and log in: ${sessionInfo.url}`,
        );
      },
    });
    console.log("Logged in!");
  }

  const sourceClient = createClient(pkg.name);
  console.log(
    `Fetching source documents from "${sourceClient.repositoryName}"...`,
  );
  const allDocuments = await sourceClient.dangerouslyGetAll();

  const client = createWriteClient(sm.repositoryName, {
    writeToken: await authManager.getAuthenticationToken(),
  });

  const migration = createMigration();
  for (const document of allDocuments)
    migration.createDocumentFromPrismic(
      document,
      (document.uid || document.type)
        .split(/ -/g)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" "),
    );

  console.log(`Copying documents to "${client.repositoryName}"...`);
  await client.migrate(migration);

  console.log(
    `Done! Next, visit https://${sm.repositoryName}.prismic.io/builder/migration to publish your release.`,
  );
}

const fs = require("fs").promises;
const path = require("path");
async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".paperGit");
  const commitsPath = path.join(repoPath, "commits");
  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitsPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({ bucket: process.env.S3_BUCKET })
    );
    console.log("repo initialize");
  } catch (err) {
    console.err("ERROR INITIALISING REPO", err);
  }
}

module.exports = { initRepo };

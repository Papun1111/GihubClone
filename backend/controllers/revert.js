const fs = require("fs");
const path = require("path");
const {promisify}=require('util');
const readdir=promisify(fs.readdir);
const copyFile=promisify(fs.copyFile);
async function revertRepo(commitID) {
    const repoPath = path.resolve(process.cwd(), ".paperGit");
    const commitsPath = path.join(repoPath, "commits");
    try{
const commitDir=path.join(commitsPath,commitID);
const files=await readdir(commitDir);
const parentDir=path.resolve(repoPath,"..");
for(const file of files){
    await copyFile(path.join(commitDir,file),path.join(parentDir,file));
}
console.log(`commit ${commitID} reverted succesfully`);
    }  
    catch(err){
        console.error("unable to revert back",err)
    }

}
module.exports={revertRepo};
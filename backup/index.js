const fs = require("fs");
const axios = require("axios");
const extractValue = (arg) => {
  const splitArg = arg.split("=");
  return splitArg[1];
};
const takeBackup = async () => {
  // get args
  const args = process.argv.slice(2).map(extractValue);

  // get token from args
  const token = `Bearer ${args[0]}`;
  const projectId = args[1];

  const { data } = await axios.get(
    `https://${projectId}.api.sanity.io/v2021-06-07/data/export/production`,
    {
      headers: {
        Authorization: token.replace(/\r?\n|\r/g, ""),
      },
    }
  ).catch((err) => {
    console.error(err);
    });
    
  // console.log(data);
  fs.writeFileSync("test.json", data);
  // run npx ndjson-to-json-text  test.json > final.json to convert ndjson to json using child_process
  const { execSync } = require("child_process");
  
  execSync(
    `npx ndjson-to-json test.json > ${__dirname}/backups/backup.json`,
    (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err);
      } else {
        // delete test.json
        fs.unlinkSync("test.json");
      }
    }
  );
};
takeBackup();

const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];

const languageCode = franc(input);

const language=langs.where("3", languageCode);

console.log(language.name);

const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];

const languageCode = franc(input);

if(languageCode==='und'){
    console.log('SORRY ,TRY WITH MORE SAMPLE TEXT');
}
else{
    const language=langs.where("3", languageCode);
    console.log(language.name);
}

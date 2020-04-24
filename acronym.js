function acronym(string) {
    var punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s{2,}/g," ");
    var matches = finalString.match(/\b(\w)/g); // ['J','S','O','N']
    return matches.join('').toUpperCase(); // JSON
}

console.log(acronym('The Road _Not_ Taken'))

if (acronym("The Road _Not_ Taken") == "TRNT") {
    console.log("yes")
}
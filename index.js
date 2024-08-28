const clamp = require("clamp");
const randomId = require("random-tld");
const randomLorem = require("random-lorem");

function generateId(level,tld)
{
    if(!level)
    {
        level = 1;
    }
    if(!tld)
    {
        tld = randomId();
    }
    let email = [];
    while(level >= 0)
    {
        email.push(randomLorem());
        level--;
    }
    email.push(tld);
    return email.join(".");
}

module.exports = {generateId};
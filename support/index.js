const fs = require('fs');
const path = require('path');

module.exports = () => {
    const support = fs.readFileSync(path.join(__dirname, './support'));
}
var fs = require("fs");

module.exports = function(filePath) {
    if (fs.existsSync(filePath)) {
        return
    }
    fs.mkdirSync(filePath);
}
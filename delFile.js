const fs = require("fs");
module.exports = function(path) {
    function deleteFolder(path) {
        var files = [];
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            files.forEach(function(files, index) {
                var curPath = path + "/" + files;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolder(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            // fs.rmdirSync(path);
        }
    }
    deleteFolder(path);
};
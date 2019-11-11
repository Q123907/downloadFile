const request = require('request');
const fs = require("fs");
const uuid = require('node-uuid');
const config = require('./config')
module.exports = async(url) => {
    return new Promise(async(resolve, reject) => {
        let imgName = url.split('/')[url.split('/').length - 1]
        if (config.uuid) {
            imgName = await uuid.v4() + imgName
        }
        request.get({
            url: url,
        }, function(error, response, body) {
            if (!error) {
                resolve({ body, response, });
            } else {
                console.log('图片下载失败')
                reject(error)
            }
        }).pipe(fs.createWriteStream(`${config.saveFile}/${imgName}`));
    })
};
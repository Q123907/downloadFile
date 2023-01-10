const request = require("request");
const fs = require("fs");
const uuid = require("node-uuid");
const config = require("./config");

const { json } = require("express");
const xlsx = require("node-xlsx");

module.exports = async (url, name) => {
  return new Promise(async (resolve, reject) => {
    let imgName = name || url.split("/")[url.split("/").length - 1];
    if (!name && config.uuid) {
      imgName = (await uuid.v4()) + imgName;
    }
    var index = imgName.lastIndexOf(".");
    let fileValueSuffix = imgName.substring(index);
    const hasSuffix =
      /(.*)\.(mp3|MP3|ogg|OGG|wav|WAV|midi|MIDI|wma|WMA|mpeg|MPEG)$/.test(
        fileValueSuffix
      );
    if (!hasSuffix) {
      imgName = `${imgName}${config.suffix}`;
    }
    request
      .get(
        {
          url: url,
        },
        function (error, response, body) {
          if (!error) {
            resolve({ body, response });
          } else {
            console.log("图片下载失败");
            reject(error);
          }
        }
      )
      .pipe(fs.createWriteStream(`${config.saveFile}/${imgName}`));
  });
};

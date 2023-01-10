var uuid = require("node-uuid");
const downloadImg = require("./downloadImg");
const config = require("./config");
const mkdir = require("./mkdir");
const delFile = require("./delFile.js");
const fs = require("fs");

mkdir(config.saveFile);
if (config.delFile) {
  delFile(config.saveFile);
}
const getImageUrl = async () => {
  const urlArr = config.imgUrl();
  for (let i = 0; i < urlArr.length; i++) {
    const elem = urlArr[i];
    await downloadImg(elem[config.keyMap.url], elem[config.keyMap.name]).catch(
      (err) => {
        console.log("下载失败", elem);
      }
    );
  }
};

if (config.imgUrl().constructor.name == "Array") {
  getImageUrl();
  return;
}

if (typeof config.imgUrl() == "string") {
  downloadImg(config.imgUrl(), "image");
  return;
}
console.log("图片地址输入格式不正确");

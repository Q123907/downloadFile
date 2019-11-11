var uuid = require('node-uuid');
const downloadImg = require('./downloadImg')
const config = require('./config')
const mkdir = require('./mkdir')
const delFile = require('./delFile.js')

mkdir(config.saveFile)
if (config.delFile) {
    delFile(config.saveFile)
}
if (config.imgUrl().constructor.name == "Array") {
    config.imgUrl().forEach(elem => {
        downloadImg(elem)
    })
    return
}

if (typeof config.imgUrl() == "string") {
    downloadImg(config.imgUrl())
    return
}
console.log('图片地址输入格式不正确')
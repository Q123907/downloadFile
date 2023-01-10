const imgArr = require("./imageUrl");
// 倒入数据
const imageInfo = require("./file/data.json");

//读取excel
// console.log("data", JSON.stringify(xlsx.parse("./file/data.xlsx")));
//读取json
// const data = fs.readFileSync("./file/data.xlsx", "utf-8");

const data1 = require("./file/data.json");
// const imgArr = require("./image1");
module.exports = {
  saveFile: "./images", //图片保存文件
  imgUrl: function () {
    // const url =
    //   "";
    const urlArr = data1.RECORDS;
    return urlArr; //需要下载的图片地址必须是是数组或者字符串
  },
  keyMap: {
    name: "secret",
    url: "url",
  },
  uuid: false, //图片名称是否用hash防止出现重复名称设置
  delFile: true, //下载图片前是否清空之前文件夹
  suffix: ".png",
};

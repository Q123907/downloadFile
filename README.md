# downloadFile
node下载图片，目前只能根据已知图片地址进行下载
可以再config.js文件中进行设置
    
    saveFile //图片保存文件
    imgUrl: function() {
        const url = ''
        return "" //需要下载的图片地址必须是是数组或者字符串
    },
    uuid: false, //图片名称是否用hash防止出现重复名称设置
    delFile: false, //下载图片前是否清空之前文件夹

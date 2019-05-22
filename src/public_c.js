var url_d = "https://duxinggj.com/"
url_d ='http://192.168.0.62:8360/'
import axios from "axios"
var CryptoJS = require("crypto-js");
var key = "duxinggongchengguoqingguangzoulg"
export default {
    install(Vue) {
        Vue.prototype.base_url = "http://127.0.0.1:8360/"

        Vue.prototype.wxpost = function (ur_l, dtat) {
            var encrypt = CryptoJS.AES.encrypt(JSON.stringify(dtat), CryptoJS.enc.Utf8.parse(key), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            var sd_df = {
                token: encrypt.toString()
            }
            var sd_Df = ""
            let th = this
            return new Promise((resolve, reject) => {
                wx.request({
                    url: url_d + ur_l, //仅为示例，并非真实的接口地址
                    method: "post",
                    data: sd_df,
                    header: {
                        'content-type': 'application/json'
                    },
                    dataType: "json",
                    success: function (res) {
                        var decrypt = CryptoJS.AES.decrypt(res.data.data, CryptoJS.enc.Utf8.parse(key), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        });
                        decrypt = decrypt.toString(CryptoJS.enc.Utf8)

                        resolve(JSON.parse(decrypt))
                    },
                    error() {
                        console.log("请求错误")
                    }
                })
            })
        }

        Vue.prototype.post = function (url, dtat, type) {
            var encrypt = CryptoJS.AES.encrypt(JSON.stringify(dtat), CryptoJS.enc.Utf8.parse(key), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            var sd_df = {
                token: encrypt.toString()
            }
            var sd_Df = ""
            let th = this
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: url_d + url,
                    data: sd_df
                }).then((res) => {
                    sd_Df = res
                    var decrypt = CryptoJS.AES.decrypt(res.data.data, CryptoJS.enc.Utf8.parse(key), {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    decrypt = decrypt.toString(CryptoJS.enc.Utf8)
                    resolve(JSON.parse(decrypt))

                }).catch(err => {
                    console.log(sd_Df);
                    console.log(444);
                    //                    if (sd_Df.data.code == 0) {
                    //                        th.$message.success(sd_Df.data.msg);
                    //                    }
                    //                    if (sd_Df.data.code == -1) {
                    //                        th.$message.error(sd_Df.data.msg);
                    //                    }
                    resolve(sd_Df.data)
                })

            })
        }

        Vue.prototype.get = function (url, dtat, call) {
            let th = this
            axios.get(url_d + url, {
                params: dtat
            }).then(function (response) {
                if (response.data.code == 0) {
                    th.$message({
                        message: response.data.msg,
                        type: 'success'
                    });
                }

                call(response.data.data)
            })
        }

        Vue.prototype.time_c = function (t) {
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data
        }


        Vue.prototype.time_d = function (t) {
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
                hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
                Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
                Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
        }




        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|14[0-9]{9}|19[0-9]{9}|16[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };






        Vue.prototype.editorOption = {
            modules: {
                toolbar: [
              ['bold', 'italic'], //加粗，斜体，下划线，删除线
              [{
                        'header': 1
                    }, {
                        'header': 2
                    }], // 标题，键值对的形式；1、2表示字体大小
              [{
                        'indent': '-1'
                    }, {
                        'indent': '+1'
                    }], // 缩进
              [{
                        'size': ['small', false, 'large', 'huge']
                    }], // 字体大小
              [{
                        'color': []
                    }, {
                        'background': []
                    }], // 字体颜色，字体背景颜色
              [{
                        'font': []
                    }], //字体
              [{
                        'align': []
                    }], //对齐方式

              ['clean'], //清除字体样式
              ['image', 'video'] //上传图片、上传视频

            ]
            }
        }





    }

}

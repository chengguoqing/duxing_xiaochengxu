<!--sku-->
<template>
	<section class="">
                <section class="pd sdf_dfgr pr">
                    <van-icon name="close" class="z9 fz40 dsf_kj_der" @click="$emit('close_sd')"/>
                        <img :src="data.spt[0]" class="dfdsf_sd_se fl" @click="cjhsd(data.spt[0])">
                    <section class="ov pl20 pt20 pr40">
                        <p class="dian fz28 z3">{{data.name}}</p>
                        <p class="fz26 red mt20">￥{{data.jiage}}</p>
                </section>
                    <p class="qc"></p>
                    <section class="btm mt0 pt20">
                    <van-row class="  ">
                        <van-col span="12">
                            <p  class="z3 fz26">购买数量:</p>
                            <p class="z9 fz24">剩余24件</p>
                        </van-col>
                        <van-col span="12" class="tr">
    <van-stepper v-model="dsf_deet"  />
                        </van-col>
                    </van-row>
                    </section>
                </section>
        <section class="mt40">
        <van-button type="danger" size="large" @click="next_sr" :loading= "sdsd_dsfs" >下一步</van-button>
    </section>
        <!--    加载框-->
<van-toast id="van-toast" />
            </section>
</template>
<script>
    import Toast from '../../../vant/toast/toast';
    export default {
        props: {
            type_dd: "",
            data: ""
        },
        data() {
            return {
                dsf_deet: 1,
                sdsd_dsfs: false
            }
        },
        components: {
            Toast
        },
        methods: {
            getcode() {
                var th = this
                wx.login({
                    success: function(code) {
                        var code = code.code
                        th.get_dfg(code)
                    }

                })

            },
            async get_dfg(code) {

                if (!this.sdsd_dsfs) {
                    this.sdsd_dsfs = true
                    var sd_der = await this.wxpost("comm/wx_load", {
                        code: code
                    })
                    sd_der = JSON.parse(sd_der)
                    if (sd_der.errcode == '40125') {
                        Toast.fail("获取oppenid失败");
                        return
                    }
                    wx.setStorageSync('openid', sd_der.openid)

                    wx.navigateTo({
                        url: '/pages/order_formqueren/main'
                    })
                    this.sdsd_dsfs = false
                    this.$emit('close_sd')
                }
            },
            next_sr() {
                if (this.type_dd == 2) {
                    this.getcode()
                }
            },
            cjhsd(sdr) {
                var sd_dd = []
                sd_dd.push(sdr)
                wx.previewImage({
                    urls: sd_dd // 需要预览的图片http链接列表
                })
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .van-popup {
        overflow: inherit !important
    }

</style>
<style scoped>
    .dfdsf_sd_se {
        width: 140rpx;
        height: 140rpx;
        position: relative;
        bottom: 20rpx;
        border-radius: 8rpx;
        border: 1px solid #fff
    }

    .dsf_kj_der {
        position: absolute;
        right: 20rpx;
        top: 20rpx;
    }

</style>

<template>
	<div >
	    <section class="dx_title pd  fz28 bgff btm" @tap="shoudsd">
            <i class="dx iconweixin khj_drert cz f_b fz40"></i><span class="ml10 fz28">获取微信收货地址</span>
            <i class="dx dsfd_df_drt iconyoujiantou"></i>
    </section>
        
        <section class="mt20  bgff">
<van-radio-group v-model="radio" @change="onChange">
  <van-radio :name="sd" class="pr fdgd_drert btm pl20" v-for="(sd,idx) in ssd_sdf">
        <section class="sd_jJ_dert pt20 pm20">
            <p class="fz28 z3">程国庆,13538190372</p>
            <p class="z9 fz26 mt10">收货地址：广东省广州市黄埔区萝岗敏捷广场402区萝岗敏捷广场402</p>
        </section>
      <van-icon name="edit" class="ddfeertx"/>
</van-radio>
</van-radio-group>
            
            
    </section>

        <van-button type="danger" size="large" class="df_uh_det w100" @click="sshuy">新增收货地址</van-button>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                radio: "1",
                ssd_sdf: ["1", '2', '3', '4']
            }
        },
        components: {

        },
        methods: {
            onChange(e) {
                console.log(e.target);
                this.radio = e.target[0]
            },
            sshuy() {
                wx.navigateTo({
                    url: '/pages/adddz/main'
                })
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .fdgd_drert {
        display: block
    }

    .df_uh_det {
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: block;
        width: 100%;
        z-index: 1000
    }

</style>
<style scoped>
    .sd_jJ_dert {
        width: 600rpx;
    }

    .ddfeertx {
        position: absolute;
        right: 20rpx;
        top: 60rpx;
    }

</style>

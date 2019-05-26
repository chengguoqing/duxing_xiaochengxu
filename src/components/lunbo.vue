<template>
     <view class="swiper_xdfg pr">
       
    <swiper  :autoplay="autoplay"  circular="true" @change="sw_change" :interval="interval">
      <block v-for="item in lb_data">
        <swiper-item>
          <image :src="item" class="slide-image" @click="fangda(item)"/>
        </swiper-item>
      </block>
    </swiper> 
         <section class="sd_jh_dert">
   {{dsd_dsdf}} / {{lb_data.length}}
        </section>
  </view>
</template>
<script>
    export default {
        props: {
            lb_data: ""
        },
        data() {
            return {
                imgUrls: [ ], 
                indicatorDots: true, //是否显示点点
                autoplay: true, //自动播放
                interval: 10000,
                duration: 200,
                dsd_dsdf:1
                
            }
        },
        components: {

        },
        methods: {
            sw_change(e){
                this.dsd_dsdf=e.target.current+1
            },
            fangda(url) {
                wx.previewImage({
                    current: url, // 当前显示图片的http链接
                    urls: this.lb_data // 需要预览的图片http链接列表
                })
            }
        },
        mounted() {
        },
    }

</script>
<style scoped>
    .swiper_xdfg {
        height: 750rpx
    }

    .swiper_xdfg image,
    .swiper_xdfg swiper {
        width: 100%;
        height: 100%;
    }
     .sd_jh_dert{
        position: absolute;
        right: 20rpx;
        bottom: 20rpx;
        background: rgba(0,0,0,0.5);
        color: #fff;
        font-size: 24rpx;
        border-radius: 20rpx;
        padding: 5rpx 20rpx;
    }

</style>

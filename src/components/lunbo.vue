<template>
     <view class="swiper_xdfg ">
       
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular="true" :indicator-active-color="active_color" :indicator-color="indicator">
      <block v-for="item in lb_data">
        <swiper-item>
          <image :src="item" class="slide-image" @click="fangda(item)"/>
        </swiper-item>
      </block>
    </swiper>  
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
                active_color: "#fff", //点选中的颜色 
                indicator: "#B4B4B4", //点的颜色
                interval: 10000,
                duration: 200,
            }
        },
        components: {

        },
        methods: {
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

</style>

<template>
     <view class="swiper_xdfg ">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular="true" :indicator-active-color="active_color" :indicator-color="indicator">
      <block v-for="item in imgUrls">
        <swiper-item>
          <image :src="item" class="slide-image" @click="fangda(item)"/>
        </swiper-item>
      </block>
    </swiper>  
  </view>
</template>
<script>
    export default {
        data() {
            return {
                imgUrls: [ //轮播图
                    'http://images.cangniaowl.com/230/20180531/904511e0c3b308cc4da42efabb1d5dfd.jpg?imageView2/1/w/700/h/700/interlace/0/q/80',
                    'http://images.cangniaowl.com/images/230/20181112/8c80c4a588a42a39993d082d4f3560d0.jpg?imageView2/1/w/700/h/700/interlace/0/q/100',
                    'http://images.cangniaowl.com/images/230/20181112/8c80c4a588a42a39993d082d4f3560d0.jpg?imageView2/1/w/700/h/700/interlace/0/q/100'
                ],
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
                    urls: this.imgUrls // 需要预览的图片http链接列表
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

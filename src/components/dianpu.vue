<!--店铺-->
<template>
  <view class="bgff pd pt20 pm20">
            <img :src="info.logo" class="dianpo_dsdrt">
          <view class="ov pl20">
                        <view class="fz28 z3 fg_deertt">{{info.name}}</view>
                  <view class="box cen mt10">
                    <view class="box_a">
                                <view class="red fz28">5.00</view>
                            <view class="fz24  z9">综合评分</view>
                    </view>
                      <view class="box_a">
                                <view class="red fz28">96</view>
                            <view class="fz24  z9">全部商品</view>
                    </view>
                        <view class="box_a">
               <view class="dsfdsf_sd"><i class="dx f_b icondianpu"></i>进店逛逛</view>                 
    </view>
                </view>
            </view>
          <view class="qc"></view>
        </view> 
</template>
<script>
    export default {
        data() {
            return {
                info: ''
            }
        },
        components: {

        },
        methods: {
            async info_er() {
                console.log(333);
                this.info = await this.wxpost("shopp/info", {

                    type: 3,
                    id: 1
                }, true)
                console.log(this.info);
            }
        },

        mounted() {
            this.info_er()

        },
    }

</script>
<style scoped>
    .dianpo_dsdrt {
        width: 110rpx;
        height: 110rpx;
        float: left
    }

    .dsfdsf_sd {
        display: inline-block;
        font-size: 26rpx;
        border-radius: 40rpx;
        padding: 6rpx 24rpx;
        color: #fff;
        border: 1px solid #f94f4f;
        background-color: #f94f4f;
        position: relative;
        top: 5rpx;
    }

    .fg_deertt {
        position: relative;
    }

</style>

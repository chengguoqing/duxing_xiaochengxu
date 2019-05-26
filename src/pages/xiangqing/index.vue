<template>
<div class="dfd_dert">
       
        <view  >
           
<lunbo :lb_data="form.spt"></lunbo>
    
   
    
    
     <view class="bgff">
    <view class="pd pt10 pm10">
        <view class="pt10"> 
              <view class="fl mui-col-xs-9 fz26 red pt10">
                    ￥ <text class=" fz40">{{form.jiage}}</text> 
                </view>
                <view class="mui-col-xs-3 tr box cen">
                            <view class="box_a tr">
                                    <view class="sd_ddfe">
                                    <i class="dx iconshoucang fz34 z6 cz"></i>
                                </view>
                                    <view class="fz24 z6">收藏</view>
                            </view>
                     <view class="box_a tr pr" @click="show_deret=true">
<!--                         <button class="ssd_deeert" open-type="share"></button>-->
                                    <view class="sd_ddfe">
                                    <i class="dx iconfenxiang fz40 z6 cz"></i>
                                </view>
                                    <view class="fz24 z6">分享</view>
                             
                            </view>
                </view>
            
            <view class="qc"></view>
        </view>
        
            <view class="fz32 z3 mt10">	{{form.name}}</view>
    </view>
    
        <view class="pd sd_sddfg box cen fz22 z6 mt10">
                <view class="box_a tl">
     快递:{{form.yunfei==0?'包邮':form.yunfei}}
                </view>
               <view class="box_a">
 总销59769笔 
                </view>
               <view class="box_a tr">
广东省 广州市
                </view>
        </view>
    
        <view class="pd sd_dsdfg fz26 z9 pr">
        送 至 <i class="dx iconmap-pin red f_b fz24 ml10 cz"></i> <text class="fz24 z6 ml5">添加地址</text>
            <i class="dx icongengduo-tianchong d_jh_df "></i>
    </view>
    </view>
    
        <view class="bgff mt20">
                <view class="pl20 fz28 df_jkj_dert pr10">
                        <view class="mui-col-xs-6 z3 pingjisdrt">
                            评价(22436) 
                        </view>
                            <view class="ov tr fz22 z9">
                    <text class="red">90%</text>  好评度 
                                <i class="dx iconyoujiantou f_b cz fz26 dfs_dert"></i>
                            </view>
                        <view class="qc"></view>
                </view>
                    <view class="btm pd pt20 pm20">
                                <view class="mui-col-xs-7">
                                    <img src="http://images.cangniaowl.com/images/0/20190515/84d580bea743bdf009e5f1592839dc98.jpg?imageView2/1/w/0/h/0/interlace/0/q/100" class="yj user_ertt cz">
                                    <text class="fz26 z3 ml20">昵称</text>
                                </view>
                            <view class="ov tr pt10">
            <i class="dx iconxingxing fz34 cz red f_b ml5" v-for="sd in 5"></i>
                </view>
                        
                        
                            <view class="qc"></view>
                        
                          <view class="z3 fz28 mt20">
            
					用了很久了，中间换过别的牌子，但还是感觉安茹用着舒服。
				
                </view>
                        
                            <view class="mt20 cen">
                        <view class="mui-btn  br jh_dedrrt f_b fz28">查看全部评价</view>
                    </view>
                    </view>
              
        </view>
        <view class="mt20">   <dianpu></dianpu></view>
    
    </view>
    
    
        <view class="bgff mt20">
                <view class="pl20 fz28 df_jkj_dert pr10">
                        <view class="z3 pingjisdrt">
                            商品详情
                        </view>
    </view>
    <section class="dsf_jg_ertxc "  v-html="form.xiqngqing">
      
   
    </section>
    </view>
    
    
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" open-type="contact"/>
  <van-goods-action-icon icon="cart-o" text="购物车" info="6" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button text="加入购物车" type="warning" @click="type_dd=1;show_er=true"/>
  <van-goods-action-button text="立即购买" @click="type_dd=2;show_er=true"/>
</van-goods-action>
    
<!--    加载框-->
<van-toast id="van-toast" />
    

        <van-popup :show="show_er" position="bottom" >
            
            <sku @close_sd="show_er=false" :type_dd="type_dd" :data="form"></sku>
            
          </van-popup>
    <section  v-show="sd_dd_er">
 <fxhb xq_id="2" ref="hbaodse" @clise_s="sd_dd_er=false"></fxhb>
        </section>
    
<!--    分享下拉框-->
    <van-action-sheet
  :show="show_deret"
  :actions="actions"
cancel-text="取消"
            @select="select"
@close="show_deret=false"
/>
    
    
</div> 
</template>
<script>
    import lunbo from "@/components/lunbo"
    import dianpu from "@/components/dianpu"
    import Toast from '../../../vant/toast/toast';
    import sku from "@/components/xiangqing/sku"
    import fxhb from "@/components/xiangqing/fxhb"
    export default {
        data() {
            return {
                actions: [{
                        id: 1,
                        name: '发送给朋友',
                        openType: 'share'
                    },

                    {
                        id: 2,
                        name: '生成海报'
                    }
                ],
                show_er: false,
                sd_dd_er: false,
                show_deret: false,
                type_dd: 1, //1购物车 2立即购买
                form: {

                }
            }
        },
        components: {
            lunbo,
            dianpu,
            Toast,
            sku,
            fxhb
        },
        methods: {
            select(e) {
                this.show_deret = false
                if (e.target.id == 2) {
                    this.shwo_hb()
                }
            },

            shwo_hb() {
                this.sd_dd_er = true
                this.$refs.hbaodse.jhgh_sdf()
            },

            async getdate() {
                Toast.loading({
                    mask: true,
                    duration: 0,
                    message: '加载中...'
                });

                var sd_der = await this.wxpost("shopp/sp_list", {
                    id: 2,
                    type: 3
                }, true)
                sd_der.spt = sd_der.spt.split(",")
                this.sd_drtyx = JSON.parse(sd_der.sd_drtyx) || []
                this.sku = JSON.parse(sd_der.sku) || []
                this.form = sd_der
                Toast.clear();
            },
        },

        onReady: function() {
            this.getdate()
        },

        onShareAppMessage: function() {
            var sd_ddr = this.form.spt[0]
            return {
                title: this.form.name,
                desc: this.form.fxms,
                imageUrl: sd_ddr,
                path: '/pages/xiangqing/main?id=' + this.form.id
            }
        },

        mounted() {

        },
    }

</script>
<style>
    .dsf_jg_ertxc img {
        width: 100%
    }

    .ssd_deeert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0
    }

    .sdd_derett {
        height: 500rpx;
        width: 600rpx;
        background: red;
    }

</style>
<style scoped>
    .asd_deert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000
    }

    .sd_ddfe {
        height: 46rpx;
        line-height: 46rpx;
    }

    .sd_sddfg {
        background: #fff4f4;
        line-height: 60rpx;
    }

    .sd_dsdfg {
        line-height: 66rpx;
    }

    .d_jh_df {
        position: absolute;
        right: 20rpx;
        top: 0
    }

    .pingjisdrt {
        border-left: 6rpx solid #f95151;
        padding-left: 10rpx;
        line-height: 1
    }

    .df_jkj_dert {
        height: 70rpx;
        padding-top: 25rpx;
    }

    .dfs_dert {
        position: relative;
        bottom: 2rpx
    }

    .user_ertt {
        width: 76rpx;
        height: 76rpx;
    }

    .jh_dedrrt {
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        width: 220rpx;
        height: 66rpx;
        line-height: 66rpx;
    }

    .xq_gif {
        width: 28rpx;
        height: 20rpx;
    }

    .dfd_dert {
        padding-bottom: 100rpx
    }

</style>

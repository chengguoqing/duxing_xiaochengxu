<template>
	<div >
	   <navigator class="sd_jhj_top pr" v-if="false" url="/pages/adddz/main">
           <section class="cen" >
                <section class="yj4 dfs_jh_ser">
    +新增收货地址
                    </section>
           
               </section>
        
           
               <p class="hs_khsd"></p>
        </navigator>
        
        
        	   <navigator class="sd_jhj_top pr" url="/pages/xzshdz/main">
      
           <section  class="dsf_df_drtxd pd pt20 pr" >
            <p class="fl dsf_drtxc cen pt20">
                <i class="dx iconmap-pin fz40"></i>
            </p>
               <section class="ov pl20 pr30">
                   <section class="box fz30 z3">
                    <p class="box_a">收货人：独行工匠</p>
                       <p class="box_a tr fz26">13538190372</p>
                    </section> 
                   
                   <section class="z9 fz26 mt30">
            收货地址 北京省北京市东城区的说法都是
                    </section>
                   
                </section>
               <i class="dx iconyoujiantou dsf_derttx fz30"></i>
               
               <p class="qc"></p>
               
        </section>
           
               <p class="hs_khsd"></p>
        </navigator>
        
        
        
        <section class="mt20 bgff">
                <section class="dx_title pd">
                独行工匠
            </section>
            <section class="btm pt20 pd pm20">
                <img src="http://images.cangniaowl.com/images/230/20181112/8c80c4a588a42a39993d082d4f3560d0.jpg?imageView2/1/w/700/h/700/interlace/0/q/100" class="fenmgh_der br  fl">
                <section class="ov pl20">
                        <p class="fz30 z3 dian mt10">独行工匠</p>
                    <p class="mt40 red fz28">￥268.00 <span class="fr z22 z9">x1</span> </p>
                </section>
                <p class="qc"></p>
            </section>
    
        </section>
        
        <section class="mt20">
        <van-cell-group >
  <van-cell title="购买数量:">
        <section class="">
       <van-stepper  @change="onChange" />
    </section>
    </van-cell>
    <van-cell title="配送方式:">
            <section class=" fz26  z9">快递 共<span class="red">￥0.00</span></section>
    </van-cell>
            
   <van-field
    
    clearable
    label="买家留言:"
    placeholder="选填：给商家留言（45字以内）"
  />       
            
</van-cell-group>
            
               
        </section>
      
        
        <section class="mt20 bgff  pt20">
                <section class="box fz26 pd">
                <p class="box_a z9">
                实际支付
                </p>
                 <p class="box_a red tr">
                ￥268.00
                </p>
            </section>
            <section class="box fz26 pd mt20">
                <p class="box_a z9">
                商品金额
                </p>
                 <p class="box_a  tr">
                ￥268.00
                </p>
            </section>
             <section class="box fz26 mt20 pd">
                <p class="box_a z9">
                运费金额
                </p>
                 <p class="box_a  tr">
               + ￥20.00
                </p>
            </section>
             <section class="box fz26 mt20 pd">
                <p class="box_a z9">
                优惠金额
                </p>
                 <p class="box_a  tr">
               -￥0
                </p>
            </section>
            <section class="mt20 btm dx_title pd btm tr fz30">
    
			共1件商品，小计：<span class="red">￥268.00</span>
            
        </section>
        
        </section>
        
        <van-submit-bar
  :price="26800"
  button-text="提交订单"
  @submit="goumai"
/>
        
        
    
        

	</div>
</template>
<script>
    import jiajian from "@/components/jiajian"
    export default {
        data() {
            return {

            }
        },
        components: {
            jiajian
        },
        methods: {
            async goumai() {
                let openid = wx.getStorageSync('openid')
                let qianming = {}
                qianming.jiner = 1
                qianming.openid = openid
                var sd_der = await this.wxpost("comm/qianming", qianming)
                sd_der = JSON.parse(sd_der)
                wx.requestPayment(sd_der)
                sd_der.success = function() {
                    wx.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 2000
                    })
                }
                console.log(sd_der);

            },
            onChange(){
                
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .dasds_dert{
        transform: scale(0.8);
        right: -20rpx;
        top: -10rpx;
    }
</style>
<style scoped>
    .sd_jhj_top {
        height: 160rpx;
        line-height: 160rpx;
        background: #fff;
    }

    .dfs_jh_ser {
        margin-top: 14rpx;
        border: 1px dashed #0076ef;
        color: #0076ef;
        line-height: 1;
        font-size: 28rpx;
        display: inline-block;
        padding: 20rpx 30rpx;
    }

    .hs_khsd {
        background: url('https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/1d3bf3a0-f111-43c3-9f9a-654efa173912.png');
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4rpx;
    }

    .fenmgh_der {
        width: 160rpx;
        height: 160rpx;
    }

    .df_drrtx {
        width: 120rpx;
        float: left;
        line-height: 74rpx;
    }

    .fd_dert {
        padding-top: 13rpx;
    }

    .sd_jh_drtt {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        line-height: 100rpx;
        height: 100rpx;
        background: #fff
    }

    .tjiao_ert {
        width: 190rpx;
        height: 100rpx;
        float: right;
        background: #f94f4f;
    }

    .sd_jhj_top {
        line-height: 1
    }

    .dsf_drtxc {
        width: 60rpx;
    }

    .dsf_derttx {
        position: absolute;
        right: 20rpx;
        top: 60rpx;
    }

</style>

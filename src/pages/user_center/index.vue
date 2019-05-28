<template>
<div class="pd">
    <section class="pt20 pm20">
        <section class="dsf_jh_der pd pt20 pm20">
            <img src="/static/images/usert.png" class="user_icdse cz fl">
            <section class="ov pl30">
                    <p class="fz32 z3 mt20 b">独行工匠</p>
                <p class="z9 fz24 mt10">ID:515235</p>
            </section>
            <p class="qc"></p>
        </section> 
        
         
         <section class="dsf_jh_der box pt20 pm20 cen mt20">
             
                  <section class="box_a">
                    <p class="sdsd_dert fz32 z3">
                     515.00
                    </p>
                    <p class="z9 fz24">余额</p>
                </section>
             
              <section class="box_a">
                    <p class="sdsd_dert fz32 z3">
                       666
                    </p>
                    <p class="z9 fz24">积分</p>
                </section>
             
              <section class="box_a">
                    <p class="sdsd_dert fz32 z3">
                      5
                    </p>
                    <p class="z9 fz24">卡</p>
                </section>
                   
       </section>
        
           <section class="dsf_jh_der ov   mt20">
               <van-cell title="我的订单" is-link />
               <section class="box cen pt20 pm20">
                <section class="box_a">
                    <p class="sdsd_dert">
                        <i class="dx icondaifukuan fz50 z9"></i>
                    </p>
                    <p class="z9 fz24">待付款</p>
                </section>
                   
                   <section class="box_a">
                    <p class="sdsd_dert">
                        <i class="dx icondaifahuo fz50 z9"></i>
                    </p>
                    <p class="z9 fz24">待发货</p>
                </section>
                   
                   
                   <section class="box_a">
                    <p class="sdsd_dert">
                        <i class="dx icondaishouhuo fz50 z6"></i>
                    </p>
                    <p class="z9 fz24">待收货</p>
                </section>
                   
                   
                   
                   <section class="box_a">
                    <p class="sdsd_dert">
                        <i class="dx icondaipingjia fz50 z9"></i>
                    </p>
                    <p class="z9 fz24">待评价</p>
                </section>
            </section>
    </section>
        
           <section class="dsf_jh_der ov   mt20">
               <van-cell title="我的工具" />
               <section class="sdf_dsert">
                <van-cell icon="chat-o" title="我的消息" is-link />
                     <van-cell icon="location-o" title="收货地址" is-link />
                 <van-cell icon="chat-o" title="我的评价" is-link  />
                  <van-cell icon="service-o" title="官方客服" is-link class="pr">
                      <button open-type="contact" class="df_df_Derrt"></button>
    </van-cell>
               <van-cell icon="manager-o" title="个人信息" is-link />
                   </section>
    </section>
        
    </section>
    
</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
   .dsf_jh_der .van-cell {
       padding: 15rpx 20rpx !important;
    }
    .sdf_dsert .van-cell{
            padding: 20rpx 20rpx !important;
    }
    .df_df_Derrt{
        position: absolute;
        left: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0
    }
    
</style>
<style scoped>
    .dsf_jh_der{
        background: #fff;
        border-radius: 14rpx;
        box-shadow: 0 0 18rpx rgba(0,0,0,0.1)
    }
    .user_icdse{
        width: 120rpx;
        height: 120rpx
    }
    .sdsd_dert{
        height: 60rpx;
        line-height: 60rpx;
    }
    .sdsd_dert .fz50{
        font-size: 50rpx !important; 
    }

</style>

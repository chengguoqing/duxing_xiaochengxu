<template>
	<section class="sd_j_der   cen">
        <section class="ddf_ddrrt">
            <p class="sd_jj_det ">
                <i class="dx icondianpu z9 fz48"></i>
            </p>
            <p class="fz24 z6">进店</p>
        </section>
         <section class="ddf_ddrrt">
            <p class="sd_jj_det">
                <i class="dx iconkefu z9 fz48"></i>
            </p>
            <p class="fz24 z6">客服</p>
        </section>
        <section class="fr">
         <section class="ddf_ddrrt"> <p class="sd_jj_det"><i class="dx icongouwuche z9 fz48"></i></p><p class="fz24 z6">购物车</p></section>
        
          <section class="ddf_ddrrt ab"><section class="sd_df_dert">加入购物车</section></section>
              <navigator class="ddf_ddrrt ab" url="/pages/order_formqueren/main"><section class="sd_df_dert ab">立即购买</section>
                  </navigator>
                  <p class="qc"></p>
    </section>
        
    </section>
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
<style scoped>
    .sd_j_der{
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 1000%;
        width: 100%;
        height: 100rpx;
        background: #fff;
    }
 
    .sd_jj_det{
        height: 60rpx;
        padding-top: 6rpx;
        line-height: 60rpx;
    }
    .sd_df_dert{
        height: 100%;
        background: #ff976a;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 30rpx;
        color: #fff
    }
    .ddf_ddrrt{
        float: left;
        width: 110rpx;
    }
    .sd_df_dert.ab{
        background: #f95151
    }
    .ddf_ddrrt:active{
        opacity: 0.8
    }
    .ddf_ddrrt.ab{
        width: 210rpx;
    }
</style>

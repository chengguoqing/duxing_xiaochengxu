<template>
	<div class="dsf_jh_dsdfrt br">
        <p class="sd_ddfrt" @tap="sddf_dsd(0)">-</p>
        <input type="number" class="sdf_dftx fz26" v-model="dsf_deet" >
             <p class="sd_ddfrt ab" @tap="sddf_dsd(1)">+</p>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                dsf_deet: 1
            }
        },
        components: {

        },
        methods: {
            sddf_dsd(ty) {
                if (ty == 0) {
                    if (this.dsf_deet <=1) {
                        return
                    }
                    this.dsf_deet--
                } else {
                    this.dsf_deet++
                }
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_jh_dsdfrt {
        display: inline-block;
        width: 180rpx;
        height: 46rpx;
        border-radius: 8rpx;
        position: relative;
        font-size: 32rpx;
        overflow: hidden;
        position: relative
    }

    .sd_ddfrt {
        width: 50rpx;
        border-right: 1px solid #e0e0e0;
        text-align: center;
        position: absolute;
        left: 0px;
        line-height: 46rpx;
        top: -4rpx;
        z-index: 1000
    }

    .sd_ddfrt.ab {
        left: inherit;
        right: 0px;
        border: 0px;
        border-left: 1px solid #e0e0e0;
    }

    .sdf_dftx {
        position: absolute;
        left: 0px;
        top: 0rpx;
        width: 80rpx;
        right: 0;
        margin: auto;
        z-index: 1;
        height: 100%;
        text-align: center;
        padding: 0 !important;
    }

</style>

<!--分享海报-->
<template>
	<div >
	<section class="sd_kj_dert" v-if="dfs_uu_e">
            <section class="sd_kjj_ddr">
                <p class="pr yj4 ov">
                    <van-icon name="close" class="dsfdsf_dsd fz50 z9" @click="$emit('clise_s')"/>
                    <img :src="dfs_uu_e" class="w100" mode="widthFix" >
                </p>
                
                <section class="mt20">
                    <van-button size="large" type="danger" @click="bapcuns">保存图片</van-button>
                </section>
            </section>
        
    </section>
        
        

        <!--    加载框-->
<van-toast id="van-toast" />
    
	</div>
</template>
<script>
    import Toast from '../../../vant/toast/toast';
    export default {
        props: {
            xq_id: ""
        },
        data() {
            return {
                dfs_uu_e: ""
            }
        },
        components: {
            Toast
        },
        methods: {
            async jhgh_sdf() {
                if (this.dfs_uu_e) {
                    return
                }
                Toast.loading({
                    mask: true,
                    duration: 0,
                    message: '海报生成中...'
                });

                this.dfs_uu_e = await this.wxpost("xiaochengxu/tuphec", {
                    id: 2
                })
                this.dfs_uu_e = this.dfs_uu_e.img_e
                Toast.clear();
            },
            bapcuns() {
                let th = this

                wx.getImageInfo({
                    src: th.dfs_uu_e,
                    success(res) {
                        Toast.loading({
                            mask: true,
                            duration: 0,
                            message: '保存中...'
                        });
                        wx.saveImageToPhotosAlbum({
                            filePath: res.path,
                            success(res) {
                                Toast.clear();
                                Toast.success('保存成功');
                            }
                        })


                    }
                })
            }
        },
        mounted() {

            //      this.jhgh_sdf()
        },
    }

</script>
<style scoped>
    .sd_kj_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 100
    }

    .sd_kjj_ddr {
        width: 550rpx;
        margin: auto;
        margin-top: 20rpx;
    }

    .dsfdsf_dsd {
        position: absolute;
        right: 10rpx;
        top: 10rpx;
    }

</style>

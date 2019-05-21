<template>
	<div >
	
        <section class="dx_title pd  fz28 bgff btm" @tap="shoudsd">
            <i class="dx iconweixin khj_drert cz f_b fz40"></i><span class="ml10 fz28">获取微信收货地址</span>
            <i class="dx dsfd_df_drt iconyoujiantou"></i>
    </section>

        <section class="mt20 bgff">
      <section class="dx_row pd btm">
                <span class="df_drrtx fz28">姓名:</span>
                <section class="ov pl20 fd_dert">
                    <input placeholder="收货人姓名" class="fz28 " v-model="form.userName" >
                </section>
                <p class="qc"></p>
            </section>
                  <section class="dx_row pd btm">
                <span class="df_drrtx fz28">电话:</span>
                <section class="ov pl20 fd_dert">
                    <input placeholder="收货人手机号" class="fz28 " type="number" v-model="form.telNumber" >
                </section>
                <p class="qc"></p>
            </section>
                  <section class="dx_row pd btm">
                <span class="df_drrtx fz28">地区:</span>
                <section class="ov pl20 fd_dert">
                      <picker
    mode="region" 
    @change="bindRegionChange"
  >
                <span class="z9 fz28" v-if="!form.provinceName">选择省 / 市 / 区</span>
                    <span v-else  class="z3 fz28">{{form.provinceName +"/"+form.cityName+"/"+form.countyName}}</span>
                
    </picker>
    </section>
                <p class="qc"></p>
            </section>
                  <section class="dx_row pd btm">
                <span class="df_drrtx fz28">详细地址:</span>
                <section class="ov pl20 fd_dert">
                    <textarea placeholder="街道门牌、楼层房间号等信息" class="fz28 dsf_df_dert" v-model="form.detailInfo"  />
                </section>
                <p class="qc"></p>
            </section>
    
        </section>
        <section class="mt40 pd">
            <button class="w100 bgred fz32">保存并使用</button>
        </section>
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    userName: "", //姓名
                    telNumber: "", //电话
                    provinceName: "",
                    cityName: "",
                    countyName: "",
                    detailInfo: ""
                }
            }
        },
        components: {

        },
        methods: {
            shoudsd() {
                let th = this
                wx.chooseAddress({
                    success(res) {
                        th.form = res
                    }
                })
            }, 
            bindRegionChange(e) {
                var sd_drer=e.target.value
                this.form.provinceName=sd_drer[0]
                 this.form.cityName=sd_drer[1]
                  this.form.countyName=sd_drer[2]
                console.log();
            } 
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_df_dert {
        padding-left: 6rpx;
        text-indent: 0rpx;
        height: 150rpx;
        width: 100%;
    }

</style>

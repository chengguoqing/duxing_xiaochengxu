<template>
	<div >
        <section class="dx_title pd  fz28 bgff btm" @tap="shoudsd">
            <i class="dx iconweixin khj_drert cz f_b fz40"></i><span class="ml10 fz28">获取微信收货地址</span>
            <i class="dx dsfd_df_drt iconyoujiantou"></i>
    </section>

        <section class="mt20 bgff">
        
            <van-cell-group>
  <van-field
    required
    clearable
    v-model="form.userName"
    label="姓名"
    placeholder="收货人姓名"
  />
                
      <van-field
    required
    clearable
    type="number"
    v-model="form.telNumber"
    label="电话"
    placeholder="收货人手机号"
  />
                
       <picker
    mode="region" 
    @change="bindRegionChange"
  >
       
     <van-field
    required
    clearable
    v-model="form.ssq_er" 
    label="地区"
     disabled
    placeholder="选择省 / 市 / 区"
 />
          
  </picker> 
                
                
                
                 <van-field
                            class="dsf_drtttx"
    type="textarea"
    v-model="form.detailInfo"
    label="详细地址"
    :rows="4"
   :autosize="true"
    placeholder="请输入详细地址"
  />
   
                
                
  
</van-cell-group>
            
       
                 
   
                 
    
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
                    ssq_er:"",
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
                        th.form.ssq_er=th.form.provinceName+" / "+th.form.cityName+" / "+th.form.countyName
                    }
                })
            }, 
            bindRegionChange(e) {
                var sd_drer=e.target.value
                this.form.provinceName=sd_drer[0]
                 this.form.cityName=sd_drer[1]
                  this.form.countyName=sd_drer[2]
                this.form.ssq_er=sd_drer[0]+" / "+sd_drer[1]+" / "+sd_drer[2]
                console.log();
            } 
        },
        mounted() {

        },
    }

</script>
<style>
   .dsf_drtttx .van-field__input,   .dsf_drtttx textarea{
        height: 200rpx !important
    }
</style>
<style scoped>
    .dsf_df_dert {
        padding-left: 6rpx;
        text-indent: 0rpx;
        height: 150rpx;
        width: 100%;
    }

</style>

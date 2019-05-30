<template>
<div class="dsf_deert">

    <section class="pd sd_d_erer pd bgff pt20 pm20 ">
        <van-row >
            <van-col span="12">
                <van-checkbox id="tou_1" :value="ssd_dertx" @change="onChange" class="fz26"  checked-color="#FF4444">
                    <i class="dx icondianpu fz40 f_b"></i> 独行工匠
            </van-checkbox>
            </van-col>
            <van-col span="12" class="tr">
                <span class="ls fz26" @click="isd_sdf">
            {{!is_bj?'编辑':'完成'}}
                </span>
            </van-col>
        </van-row>
    </section>
    
    <section class="ssd_dsdfe">
    
 
             <van-swipe-cell right-width="65" v-for="(sd,idx) in sd_ly_s">
  <van-cell-group>
    <van-cell >
      
        <van-checkbox  :id="idx"  v-model="sd.type_ds"  @change="onChange_list" checked-color="#FF4444">
        <section class="df_kjj_dert">   
             <img src="/static/images/sf_sd_a.jpg" class="sf_sd_a_eer fl">
                <section class="ov pl20 tl">
                    <section class="dianer z3 fz28 z3 dsferjh_rt">
                       <span v-if="!is_bj">25.9元吃羊肉火锅，鲜掉眉毛的羊棒骨、羊蝎子羊蝎子羊蝎子</span> 
                        <section v-else @click.stop>
    <van-stepper  />
                        </section>
                    </section>
                    
                    <p class="fz24 z9 dian ">
                        9.9元秒杀九道口羊骨棒 原价86
                    </p>
                    <section class="mt5">
            <van-row  >
                <van-col span="12" class="fz30 red">￥25.9</van-col>
                <van-col span="12" class="tr fz24">
                   X1
                </van-col>
            </van-row>
                </section>
                </section>
                
                <p class="qc"></p>
        </section>
        </van-checkbox>
    </van-cell>
      
      
  </van-cell-group>
  <view slot="right" class="dsf_ddf_deer">删除</view>
</van-swipe-cell>
        
        
    </section>
    

    
    
    <van-submit-bar
  :disabled="is_disabled"
  :price="3050"
  :button-text="!is_bj?'结算':'删除'"
  bind:submit="onClickButton"
>
        
  <section class="pl20">
         <van-checkbox id="tou_1" :value="ssd_dertx" @change="onChange" class="fz26"  checked-color="#FF4444">
                   全选
            </van-checkbox>  
        </section>   
</van-submit-bar>

    
</div>
</template>
<script>
    export default {
        data() {
            return {
                ssd_dertx: true,
                result: "nasd_c",
                sd_ly_s: [{
                    type_ds: true,
                    cls: ""
                }, {
                    type_ds: true,
                    cls: ""
                }, {
                    type_ds: true,
                    cls: ""
                }, {
                    type_ds: true,
                    cls: ""
                }, {
                    type_ds: true,
                    cls: ""
                }, {
                    type_ds: true,
                    cls: ""
                }],
                is_bj: false, //是否为编辑状态
                sd_ddf: 0,
                is_disabled:false
            }
        },
        components: {

        },
        methods: {
            onChange(e) { //店铺的全选 和反选按钮触发
                if (this.ssd_dertx) {
                    this.ssd_dertx = false
                    this.sd_ly_s.map(a => {
                        a.type_ds = false
                    })
                     this.is_disabled=true
                } else {
                    this.ssd_dertx = true
                    this.sd_ly_s.map(a => {
                        a.type_ds = true
                    })
                     this.is_disabled=false
                }
            },
            onChange_list(e) {
                var is_sd = e.target.id
                this.sd_ly_s[is_sd].type_ds ? this.sd_ly_s[is_sd].type_ds = false : this.sd_ly_s[is_sd].type_ds = true
                this.sd_ddf = 0
                this.sd_ly_s.map(a => {
                    if (a.type_ds) {
                        this.sd_ddf++
                    }
                })
                 
                 if (this.sd_ddf>0){
                     this.is_disabled=false
                 }else{
                     this.is_disabled=true
                 }
                if (this.sd_ddf == this.sd_ly_s.length) { //全勾选了  
                    this.ssd_dertx = true
                } else {
                    this.ssd_dertx = false
                }
            },
            isd_sdf() {
                if (this.is_bj) {
                    this.is_bj = false
                    this.ssd_dertx = true
                    this.sd_ly_s.map(a => {
                        a.type_ds = true
                    })
                    this.sd_ddf= this.sd_ly_s.length
                    this.is_disabled=false

                } else {
                    this.is_bj = true
                    this.ssd_dertx = false
                    this.sd_ly_s.map(a => {
                        a.type_ds = false
                    })
                        this.is_disabled=true
                      this.sd_ddf=0
                }
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .ssd_dsdfe .van-checkbox__icon {
        position: relative;
        top: 60rpx;
    }

</style>
<style scoped>
    .sd_d_er {
        line-height: 90rpx;
    }

    .dsferjh_rt {
        line-height: 1.5;
        height: 80rpx;
    }

    .df_kjj_dert {}

    .dsf_ddf_deer {
        height: 220rpx;
        color: #fff;
        line-height: 220rpx;
        font-size: 28rpx;
        background: #FF4444;
        width: 140rpx;
        text-align: center;

    }

    .dsf_deert {
        padding-bottom: 150rpx;
    }

</style>

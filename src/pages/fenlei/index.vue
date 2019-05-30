<template>
<div class="ssd_jhj_der bgff">
    <section class="sd_j_dh_d">
        
            <ul >
                <li v-for="(sd,idx) in fenlei_ds" class="dsf_jh_dert pr" :class="id_s==idx?'act':''" @click="id_s=idx">
                    <span class="sd_jHJ_der"></span>
                    {{sd.name}}
                    </li>
            </ul>
    
        </section> 
    <section class="ov  h100">
         <scroll-view :scroll-y="true" style="height: 100%;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" >
        <div class="pd">
            <navigator  class="mt30" v-for="sd in 20" url="/pages/xiangqing/main">
                <img src="/static/images/sf_sd_a.jpg" class="sf_sd_a_eer fl">
                <section class="ov pl20">
                    <p class="dianer z3 fz30">
                25.9元吃羊肉火锅，鲜掉眉毛的羊棒骨、羊蝎子羊蝎子羊蝎子
                    </p>
                    
                    <p class="fz26 z9 dian mt10">
                        9.9元秒杀九道口羊骨棒 原价86
                    </p>
                    <section class="mt10">
            <van-row  >
                <van-col span="12" class="fz30 red">￥25.9</van-col>
                <van-col span="12" class="tr">
                    <i class="dx icongouwuche1 red fz40 cz"></i>
                </van-col>
            </van-row>
                </section>
                </section>
                
                <p class="qc"></p>
            </navigator >
    </div>
    </scroll-view>
    </section>
<p class="qc"></p>
</div>
</template>
<script>
    export default {
        data() {
            return {
                id_s:0,
                fenlei_ds:[
                    {
                        id:"dfds_a",
                        name:"美食餐饮",
                        cls:""
                    }, {
                        id:"dfds_b",
                        name:"美妆丽人",
                        cls:""
                    }, {
                        id:"dfds_c",
                        name:"母婴亲子",
                        cls:""
                    }, {
                        id:"dfds_d",
                        name:"休闲娱乐",
                        cls:""
                    }, {
                        id:"dfds_e",
                        name:"休闲娱乐",
                        cls:""
                    }, {
                        id:"dfds_f",
                        name:"医疗健康",
                        cls:""
                    }, {
                        id:"dfds_g",
                        name:"运动健身",
                        cls:""
                    }
                ]
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
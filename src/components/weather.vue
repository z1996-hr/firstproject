<template>
<div id="app">
     
  <div class="weather_top">
        <h2>天知道</h2>
        <input type="text" v-model="city" @keyup.enter="searchWeather" placeholder="请输入查询的城市" ><input type="button" @click="searchWeather" value="查询">
            <div class="city">
                <a  @click="changeCity('北京')">北京</a>
                <a  @click="changeCity('上海')">上海</a>
                <a @click="changeCity('深圳')">深圳</a>
                <a @click="changeCity('成都')">成都</a>
            </div>
            <div class="tishi">{{tixing}}</div>
        </div>
        <div class="show">
            <ul class="weather_list">
                <li v-for="item in weatherList" :key="item.data">
                    <div class="info_type"><span class="iconfont">{{item.type}}</span></div>
                    <div class="info_temp">
                        <b>{{item.low}}</b>
                        ~
                        <b>{{item.high}}</b>
                    </div>
                    <div class="info_data">{{item.date}}</div>
                </li>
            </ul>
        </div>
</div>
</template>

<script>
export default {
    
  name: 'weather',
 
    
    data(){
        return{
            city:"",
            weatherList:[],
            tixing:""
    }},
    methods:{
       
        searchWeather:function(){
            var that=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(function(response){
                console.log(response);
                that.tixing=response.data.data.ganmao
                that.weatherList=response.data.data.forecast
            })
            .catch(function(err){})
        },
        changeCity:function(city){
            this.city=city
            this.searchWeather()
        }
    }

}
</script>

<style>
    *{
    padding: 0;
    margin: auto;
}
#app{
    width: 1000px;
    height: 600px;
    
    margin-left: auto;
    margin-right: auto;
}
.weather_top{
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 150px;
    
    margin-top: 20px;

}
.weather_top >h2{
    text-align: center;
    color:red;
}
.weather_top >input{
    margin-top: 10px;
    margin-right: 150px;
    margin-left: 150px;
}
.city{
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 15px;
}
.show{
    float: left;
    text-align: center;
    width: 950px;
    height: 400px;
    margin-left: 25px;
    margin-right: 25px;
}
.tishi{
    color: red;
    margin-top: 10px;
}
.weather_list li{
    margin-top: 50px;
    list-style:none; 
    float: left; 
    height: 300px;
    display: block;
    text-align:center;
    line-height: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid blue; 
    border-radius:5px 0 0 5px ;
    /* //给li加圆角边框  */

}
.info_type{
    margin-top: 50px;
}
.info_temp{
    margin-top: 50px;
}
.info_temp >b{
    color:yellow;
    
    

}
.info_data{
    margin-top: 50px;
}
/* .show .w1{
    width: 145px;
    height: 350px;
    border: solid yellow 1px;
    float: left;
    margin-top: 25px;
    margin-left: 2px;
} */
    
</style>

var app = new Vue({
    el: '#app',
    data:{
        tweet:"",
        warning:""
    },
    computed:{
        computedColor:function(){
            color = '#70b7ff';
            if(this.tweet.length > 120){
                color = '#ffb770';
            }
            if(this.tweet.length > 140){
                color = '#ff7070';
            }
            return color;
        }
    },
    methods:{
        twitterShare: function(){
            var URL = 'https://twitter.com/intent/tweet?text=' + "にゃーん" + "%20%23社会性フィルターApp" + '&url=' + "https://rhenium75-u.github.io/social-filter/";
            if(this.tweet.length == 0){
                this.warning = "ツイート内容がありません"
            }else if(this.tweet.length <= 140){
                location.href = URL
                this.tweet = ""
                this.warning = ""
            }else{
                this.warning = "ツイートが140字を超過しています"
            }
        }
    }
})
//连通界面与后端数据接口的文件

var shelf=JSON.parse(localStorage.getItem('shelf'))?JSON.parse(localStorage.getItem('shelf')):[];
    var bookData=[];
    for(let i=0;i<shelf.length;i++){
        var id=shelf[i].bookId;
        $.get('/ajax/book?id=' + id,function(d){
            bookData[i]=d.data;
        })
    }


$.get('/ajax/index',function(d){
    var windowWidth = $(window).width();
    if(windowWidth<320){
   	  windowWidth = 320;
    }
    var offset = $($('.Swipe-tab').find('a')[0]).offset();
    var index_header_tab_width = offset.width;
    
    
    new Vue({
        el:"#app",
        data:{
            shelf:[],
            screen_width:windowWidth,
   	  	    double_screen_width:windowWidth*2,
   	  	    index_header_tab_width:index_header_tab_width,
            top:d.index.items[0].data.data,
            hot:d.index.items[1].data.data,
            recommend:d.index.items[2].data.data,
            female:d.female.data,
            male:d.male.data,
            free:d.index.items[5].data.data,
            topic:d.index.items[6].data.data,
            position:0,
            header_position:0,
            tab_1_class:'Swipe-tab__on',
            tab_2_class:'',
            minIndexF:0,
            maxIndexF:4,
            minIndexM:0,
            maxIndexM:4
        },
        computed: {
			cover(cover) {
				return "http://statics.zhuishushenqi.com" + cover;
            },
            isShowPageLoading(){
                if(this.hot){
                    return false;
                }else{
                    return true;
                }
            }
		},
        methods:{
            tabSwitch:function(pos){
                this.shelf=bookData;
                if(pos===1){
                    this.position=0;
                    this.header_position=0;
                    this.tab_1_class='Swipe-tab__on';
                    this.tab_2_class="";
                }else if(pos===2){
                    this.position = (-windowWidth);
   	  			    this.header_position = index_header_tab_width;
                    this.tab_2_class='Swipe-tab__on';
                    this.tab_1_class="";
                }
            },
            toBook:function(id){
                location.href="/book?id="+id;
            },
            readBook:function(index){
                let chapterId=shelf[index].chapterId;
                let bookId=shelf[index].bookId;
                let chapterIndex=shelf[index].chapterIndex;
                location.href = "/reader?id="+chapterId+"&book="+bookId+"&index="+chapterIndex;
            },
            changeMale:function(){
                this.minIndexM=Math.round(Math.random()*11 + 0);
                this.maxIndexM=this.minIndexM+4;
            },
            changeFemale:function(){
                this.minIndexF=Math.round(Math.random()*11 + 0);
                this.maxIndexF=this.minIndexF+4;
            }
        }
    })
},'json');

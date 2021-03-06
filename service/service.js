//连通前后端数据，把后端提供的数据进行转换，变成json格式，传递给前端
const fs=require('fs');
console.log('service')
exports.get_test_data=function(){
    let content=fs.readFileSync('./mock/reader/test.json','utf-8');
    return content;
}

exports.get_rank_data = function(channelId) {
	var content = fs.readFileSync('./mock/rank.json', 'utf-8');
	return content;
}

exports.get_index_data=function(){
    let content=fs.readFileSync('./mock/home.json','utf-8');
    return content;
}

exports.get_category_data = function(channelId) {
	var content = fs.readFileSync('./mock/category.json', 'utf-8');
	return content;
}

exports.get_male_data = function(channelId) {
	var content = fs.readFileSync('./mock/channel/male.json', 'utf-8');
	return content;
}

exports.get_female_data = function(channelId) {
	var content = fs.readFileSync('./mock/channel/female.json', 'utf-8');
	return content;
}

// exports.get_book_data = function(id) {
// 	if (!id) {
// 		id = "18218";
//     }
//     console.log(id)
// 	if(fs.existsSync('./mock/book/' + id + '.json')){
// 	 	return fs.readFileSync('./mock/book/' + id + '.json', 'utf-8');
// 	}else{
// 		return fs.readFileSync('./mock/book/18218.json', 'utf-8');
//     }
    
// }

exports.get_book_data = function(id) {
    //返回一个异步函数，当接收回调时，返回数据
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/'+id, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 };

 exports.get_book_reviews = function(id) {
    //返回一个异步函数，当接收回调时，返回数据
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/post/review/best-by-book?book='+id+'&limit=5', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 };

 exports.get_book_recommend = function(id) {
    //返回一个异步函数，当接收回调时，返回数据
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/'+id+'/recommend', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 };

 exports.get_male_one=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }

 exports.get_male_two=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=male&type=hot&major=%E8%81%8C%E5%9C%BA&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }

 exports.get_male_three=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=male&type=hot&major=%E4%BB%99%E4%BE%A0&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }



 exports.get_male_four=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=male&type=hot&major=%E7%AB%9E%E6%8A%80&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }


 exports.get_female_one=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=female&type=hot&major=%E5%8F%A4%E4%BB%A3%E8%A8%80%E6%83%85&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }

 exports.get_female_two=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=female&type=hot&major=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }

 exports.get_female_three=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=female&type=hot&major=%E9%9D%92%E6%98%A5%E6%A0%A1%E5%9B%AD&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }



 exports.get_female_four=function(){
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/by-categories?gender=female&type=hot&major=%E6%82%AC%E7%96%91%E7%81%B5%E5%BC%82&minor=&start=0&limit=20', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
 }



exports.get_chapter_id= function(id) {
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/btoc?view=summary&book='+id, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
}

exports.get_chapter_data= function(id) {
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/api/btoc/'+id+'?view=chapters&channel=mweb', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
}

exports.get_chapter_content_data= function(id) {
    return new Promise(function(resolve
        , reject) {
        try {
            var request=require('request')
            request('http://127.0.0.1:3000/chapterapi/chapter/'+id+'?cv=1495097622174', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        } catch (e) {
            console.log(e);
        }
    });

}

exports.female_data=function(){
    return new Promise(function(resolve,reject){
        try{
            var request=require('request')
            request('http://127.0.0.1:3000/api/recommendPage/node/books/all/5912872f8973b2fe3361463f', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        }catch (e) {
            console.log(e);
        }
    })
}

exports.male_data=function(){
    return new Promise(function(resolve,reject){
        try{
            var request=require('request')
            request('http://127.0.0.1:3000/api/recommendPage/node/books/all/59128334694d1cda365b8985', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     resolve(body);
                }
            })
        }catch (e) {
            console.log(e);
        }
    })
}




exports.get_search_data = function( keyword) {
    //返回一个异步函数，当接收回调时，返回数据
    return new Promise(function(resolve
        , reject) {
        try {
            const http = require('http');
            // 该模块的作用是把一个object对象，转换为http的查询参数
            const qs = require('querystring');
            let data = {
                query: keyword
                // start: start,
                // end: end
            };
            let query_str = qs.stringify(data);
            // jQuery.get('http://127.0.0.1:3000/api/book/fuzzy-search?query='+query_str,function(data){
            //     console.log(data);
            // });
            console.log('aaa',query_str)
            var request=require('request')
            request('http://127.0.0.1:3000/api/book/fuzzy-search?'+query_str, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                     // Show the HTML for the baidu homepage.
                     resolve(body);
                }
            })
            
         
        } catch (e) {
            console.log(e);
        }
    });
 };

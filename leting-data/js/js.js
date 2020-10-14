var host = '';
var freshInterval = null, millisec = 10000;

var dataMap = {
    'getParkTimes': {"code":200,"msg":"success","data":{"totalTimes":1537}},
    'getParkAmount': {"code":200,"msg":"success","data":{"totalAmount":6891.23}},
    'getVehicleEntryCount': {"code":200,"msg":"success","data":{"totalCount":989}},
    'getCurrentParkAmount': {"code":200,"msg":"success","data":{"totalAmount":6728.02}},
    'getCurrentParkTimes': {"code":200,"msg":"success","data":{"totalTimes": 2392837}},
    'getProvinceParkCountTop5': {"code":200,"msg":"success","data":[{"areaName":"北京市","totalCount":"18"},{"areaName":"河北省","totalCount":"5"},{"areaName":"天津市","totalCount":"2"},{"areaName":"山西省","totalCount":"1"}]},
    'getParkAmountTop10': {"code":200,"msg":"success","data":[{"totalAmount":6836.47,"parkName":"创业大厦车场"},{"totalAmount":37.07,"parkName":""},{"totalAmount":11.03,"parkName":"测试V2.0版本"},{"totalAmount":5.12,"parkName":"TEST1"},{"totalAmount":1.35,"parkName":"创业大厦车场二号"}]},
    'getParkSpaceOccupancyRat': {"code":200,"msg":"success","data":{"rat":"0.02%"}},
    'getRingtoRingGrowth': {"code":200,"msg":"success","data":{"yesterdayAmount":51.98,"beforeYesterdayAmount":2.59}},
    'getParkTypeCount': {"code":200,"msg":"success","data":{"data":[{"typeName":"居民小区","typeCount":"19"},{"typeName":"商圈停车场","typeCount":"2"},{"typeName":"公园景点","typeCount":"5"}]}},
    'getProvinceParkCount': {"code":200,"msg":"success","data":[{"areaName":"山西省","totalCount":"1"},{"areaName":"天津市","totalCount":"2"},{"areaName":"河北省","totalCount":"5"},{"areaName":"北京市","totalCount":"18"}]},
    'getProvinceParkTimes': {"code":200,"msg":"success","data":{"data":[{"areaName":"","totalTimes":11},{"areaName":"","totalTimes":29}]}},
    'getParkingTrendsToday': {"code":200,"msg":"success","data":[{"entryHours":"2019-08-08 00","entryTimes":"0"},{"entryHours":"2019-08-08 02","entryTimes":"0"},{"entryHours":"2019-08-08 04","entryTimes":"0"},{"entryHours":"2019-08-08 06","entryTimes":"0"},{"entryHours":"2019-08-08 08","entryTimes":"0"},{"entryHours":"2019-08-08 10","entryTimes":"0"},{"entryHours":"2019-08-08 12","entryTimes":"0"},{"entryHours":"2019-08-08 14","entryTimes":"0"},{"entryHours":"2019-08-08 16","entryTimes":"4"}]}
};

function filter(url) {
    var key = url && url.split('/').length>2 ? url.split('/')[2] : null
    return key ? dataMap[key] : {"code": 404}
}

function fnReq(url, params, callback) {
    if (typeof params === 'function') {
        callback = params;
        params = {};
    } else {
        params = params || {};
    }
    // callback && callback(1, filter(url).data || {})
    // return
    $.ajax({
        url: host + url,
        type: "post",
        cache: false,
        data: JSON.stringify(params),
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            res = res || {};
            if (res.code == 200) {
                callback && callback(1, res.data || {}, res);
            } else {
                callback && callback(2, res.data || {}, res);
            }
        },
        error: function (e) {
            // alert("系统开了小差...");
            callback && callback(0);
        }
    });
}
$(function(){
    $('#fullScreen').click(function(){
        if('[全屏]' == $(this).text()){
            enterFullScreen();
            $(this).text('[退出全屏]');
        }else{
            exitFullScreen();
            $(this).text('[全屏]');
        } 
    });
})
//进入全屏
function enterFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}
//退出全屏
function exitFullScreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}
function fresh(fnList) {
    freshInterval = setInterval(function(){
        fnList.forEach(function(fn){
            fn && fn();
        });
    }, millisec)
}
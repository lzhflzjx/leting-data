//累计停车车次
function getParkTimes (callback) {
    fnReq('/openapi/getParkTimes', function(type, data){
        callback(type=='1' ? data.totalTimes || 0 : 0)
    });
}
//查询平台累计收费金额
function getParkAmount (callback) {
    fnReq('/openapi/getParkAmount', function(type, data){
        callback(type=='1' ? data.totalAmount || 0 : 0)
    });
}
//查询当前在场车辆数
function getVehicleEntryCount (callback) {
    fnReq('/openapi/getVehicleEntryCount', function(type, data){
        callback(type=='1' ? data.totalCount || 0 : 0)
    });
}
//根据车场查询今日收费金额
function getCurrentParkAmount (callback) {
    fnReq('/openapi/getCurrentParkAmount', function(type, data){
        callback(type=='1' ? data.totalAmount || 0 : 0)
    });
}
//查询今日停车车次
function getCurrentParkTimes (callback) {
    fnReq('/openapi/getCurrentParkTimes', function(type, data){
        callback(type=='1' ? data.totalTimes || 0 : 0)
    });
}
//查询排名前5个省的停车场数量
function getProvinceParkCountTop5 (callback) {
    fnReq('/openapi/getProvinceParkCountTop5', function(type, data){
        callback(type=='1' ? data || [] : [])
    });
}
//获取累计金额排名前五的车场
function getParkAmountTop5 (callback) {
    fnReq('/openapi/getParkAmountTop5', function(type, data){
        callback(type=='1' ? data || [] : [])
    });
}
//获取累计金额排名前十的车场
function getParkAmountTop10 (callback) {
    fnReq('/openapi/getParkAmountTop10', function(type, data){
        callback(type=='1' ? data || [] : [])
    });
}
//查询车位占用率
function getParkSpaceOccupancyRat (callback) {
    fnReq('/openapi/getParkSpaceOccupancyRat', function(type, data){
        callback(type=='1' ? data.rat.replace('%', '') || '0' : '0')
    });
}
//查询收入日环比金额
function getRingtoRingGrowth (callback) {
    fnReq('/openapi/getRingtoRingGrowth', function(type, data){
        callback(type=='1' ? data || {} : {})
    });
}
//按车场类型查询车场数量
function getParkTypeCount (callback) {
    fnReq('/openapi/getParkTypeCount', function(type, data){
        callback(type=='1' ? data.data || [] : [])
    });
}
//按省统计停车场数量
function getProvinceParkCount (callback) {
    fnReq('/openapi/getProvinceParkCount', function(type, data){
        callback(type=='1' ? data.map(function(bean){ bean.areaName = (bean.areaName || '').replace('省','').replace('市',''); return bean; }) || [] : [])
    });
}
//获取各地区停车车次数量
function getProvinceParkTimes (callback) {
    fnReq('/openapi/getProvinceParkTimes', function(type, data){
        callback(type=='1' ? data || [] : [])
    });
}
//获取今日停车趋势
function getParkingTrendsToday (callback) {
    fnReq('/openapi/getParkingTrendsToday', function(type, data){
        callback(type=='1' ? data || [] : [])
    });
}
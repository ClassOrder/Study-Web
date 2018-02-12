"use strict";
// let DATA = {
//     SUMMONER_NAME: "초고교급",
//     API_KEY: "RGAPI-06fbaacf-347d-4dd6-b384-47816cde5df0",
// }

// let REQUEST_DATA = {
//     type: 'GET',
//     contentType: "application/text",
//     url: "https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/"+DATA.SUMMONER_NAME,
//     dataType: "jsonp",
//     jsonpCallback: "myCallBack",
//     data: { api_key: DATA.API_KEY },
//     success: (data) => {
//         // console.log(data);
//         console.log("get Data success.");
//     },
// }
// function myCallBack (data) {
//     console.log("test");
//     data = JSON.parse(data);
//     return data;
// }

// $.ajax(REQUEST_DATA);

let DATA = {
    type: "get",
    contentType: "application/text",
    url: "DummyDatas/FakeData.json",
    dataType: "json",
    success: data => {
        console.log(data);
    }
}
$.ajax(DATA);
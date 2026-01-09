$httpClient.get({url:"https://my.ippure.com/v1/info",timeout:3e3},(e,_,d)=>{
const n=$notification.post;if(e)return n("IP 查询失败","",e),$done();
try{const i=JSON.parse(d||"{}"),
l=[i.city,i.region,i.countryCode].filter(Boolean).join(", ")||"Unknown",
r=i.fraudScore==null?"N/A":i.fraudScore<=30?"低":i.fraudScore<=60?"中":"高";
n(`IP ➟ ${i.ip||"Unknown"}`,"",
`📍 定位: ${l}
🏛️ 组织: ${i.asOrganization||"Unknown"}
🎯 属性: ${i.isBroadcast?"广播":"原生"} - ${i.isResidential?"住宅":"机房"}
⚖️ 风险: ${i.fraudScore??"N/A"} (${r})`)
}catch(x){n("解析失败","",x.message)}$done()})
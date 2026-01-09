$httpClient.get({
    url: "https://my.ippure.com/v1/info",
    timeout: 5000  // 稍延长超时，避免弱网失败
}, (error, response, data) => {
    const notify = $notification.post;
    
    if (error) {
        notify("IP 查询失败", "", `错误: ${error}`);
        $done();
        return;
    }
    
    if (!data || response.status !== 200) {
        notify("IP 查询失败", "", "响应异常或为空");
        $done();
        return;
    }
    
    try {
        const info = JSON.parse(data);
        
        // 定位处理：过滤空值，避免多余逗号
        const locationParts = [info.city, info.region, info.countryCode].filter(Boolean);
        const location = locationParts.length > 0 ? locationParts.join(", ") : "未知";
        
        // 属性描述
        const broadcastType = info.isBroadcast ? "广播" : "原生";
        const residentialType = info.isResidential ? "住宅" : "机房";
        
        // 风险评分颜色提示（可选增强）
        const riskLevel = info.fraudScore 
            ? (info.fraudScore <= 30 ? "低风险" 
               : info.fraudScore <= 60 ? "中等风险" 
               : "高风险")
            : "未知";
        
        const subtitle = `风险: ${info.fraudScore ?? "N/A"} (${riskLevel})`;
        const content = 
`? 定位: ${location}
? 组织: ${info.asOrganization || "未知"} (ASN: ${info.asn || "未知"})
? 属性: ${broadcastType} - ${residentialType}
?? 风险评分: ${info.fraudScore ?? "N/A"}
? 时区: ${info.timezone || "未知"}
? 坐标: ${info.latitude ? info.latitude + ", " + info.longitude : "未知"}`;
        
        notify(`IP ? ${info.ip || "未知"}`, subtitle, content);
        
    } catch (parseError) {
        notify("解析失败", "", `JSON 解析错误: ${parseError.message}`);
    }
    
    $done();
});
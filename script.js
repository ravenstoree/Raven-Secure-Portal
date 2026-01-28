let requestCount = 0;

function checkAccess() {
    requestCount++;
    const status = document.getElementById('status');
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // محاكاة نظام الدفاع ضد الضغط العالي
    if(requestCount > 5) {
        status.innerHTML = "⚠️ تنبيه أمني: تم رصد ضغط غير طبيعي على السيرفر!";
        status.style.color = "#ff4c4c";
        return;
    }

    // التحقق من البيانات (مثال)
    if(user === "admin" && pass === "123456") {
        status.innerHTML = "✅ تم تسجيل الدخول بنجاح.";
        status.style.color = "#00ff88";
    } else {
        status.innerHTML = "بيانات الدخول غير صحيحة. المحاولة: " + requestCount;
        status.style.color = "#00d4ff";
    }
}
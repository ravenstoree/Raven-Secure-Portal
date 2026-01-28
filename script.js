let requestCount = 0;

function handleLogin() {
    requestCount++;
    const statusBox = document.getElementById('status-box');
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // 1. اكتشاف الهجوم (الضغط المتكرر) - تفعيل Rate Limiting
    if (requestCount > 5) {
        statusBox.innerHTML = "⚠️ تحذير: تم رصد هجوم DoS! حظر الطلبات مفعل.";
        statusBox.className = "status-attack";
        return;
    }

    // 2. التحقق الفوري من البيانات
    if (user === "admin" && pass === "123456") {
        statusBox.innerHTML = "✅ تم التحقق بنجاح. أهلاً بك.";
        statusBox.className = "status-success";
    } else {
        statusBox.innerHTML = "❌ خطأ في البيانات. محاولة: " + requestCount;
        statusBox.className = "status-attack";
    }
}
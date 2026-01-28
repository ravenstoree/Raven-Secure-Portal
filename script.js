let requestCount = 0;
function checkAccess() {
    requestCount++;
    const status = document.getElementById('status');
    
    if(requestCount > 5) { // محاكاة لزيادة الطلبات (هجوم)
        status.innerHTML = "⚠️ تحذير: تم اكتشاف ضغط عالي! تفعيل بروتوكول الحماية..";
        status.style.color = "red";
    } else {
        status.innerHTML = "جاري التحقق من الهوية...";
        status.style.color = "#00d4ff";
    }
}

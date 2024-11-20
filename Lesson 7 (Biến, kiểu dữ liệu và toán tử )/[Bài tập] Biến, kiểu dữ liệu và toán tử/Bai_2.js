
function convertTemperature(){
    // Lấy giá trị nhập vào
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Kiểm tra người dùng đã nhập giá trị chưa
    if (isNaN(celsius)){
        alert("Vui lòng nhập một giá trị hợp lệ");
        return;
    }

    // Áp dụng công thức chuyển đổi
    const fahrenheit = (celsius * 9)/5 +32;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <p><strong>${fahrenheit.toFixed(1)}°F</strong></p>
    `
}
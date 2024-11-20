function calculateArea(){
    // Lấy giá trị nhập vào
    const radius = parseFloat(document.getElementById('radius').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(radius) || radius <= 0) {
        alert("Vui lòng nhập lại giá trị hợp lệ")
    }

    // Tính diện tích hình tròn
    const area = Math.PI * Math.pow(radius,2);

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    Diện tích hình tròn là: ${area.toFixed(2)}`;
}
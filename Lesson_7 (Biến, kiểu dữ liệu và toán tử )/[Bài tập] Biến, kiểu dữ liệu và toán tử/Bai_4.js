function calculateCircumference() {
    // Lấy giá trị bán kính từ người dùng nhập
    const radius = parseFloat(document.getElementById('radius').value);

    // Kiểm tra xem bán kính có hợp lệ không
    if (isNaN(radius) || radius <= 0) {
        alert("Vui lòng nhập bán kính hợp lệ (lớn hơn 0).");
        return;
    }

    // Tính chu vi theo công thức: C = 2 * π * R
    const circumference = 2 * Math.PI * radius;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    Chu vi hình tròn là: ${circumference.toFixed(2)}`;
}
function calculateScores() {
    // Lấy giá trị từ các ô nhập
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const biology = parseFloat(document.getElementById('biology').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(physics) || isNaN(chemistry) || isNaN(biology)) {
        alert("Vui lòng nhập đầy đủ điểm của tất cả các môn.");
        return;
    }

    // Tính tổng và trung bình
    const total = physics + chemistry + biology;
    const average = (total / 3).toFixed(2); // Lấy 2 chữ số thập phân

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Tổng điểm:</strong> ${total}</p>
        <p><strong>Điểm trung bình:</strong> ${average}</p>
      `;
}

// Hàm tính diện tích hình chữ nhật
function calculateArea(){

    // Bước 1: Sử dụng prompt để lấy chiều rộng và chiều cao từ người dùng
    let inputWidth = prompt("Enter the width");
    let inputHeight = prompt("Enter the height");

    // Bước 2: Chuyển đổi từ chuỗi sang số nguyên bằng parseInt
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    // Bước 3: Tính diện tích
    let area = width * height;

    // Bước 4: Hiển thị kết quả
    document.write("The area is: " + area);

}
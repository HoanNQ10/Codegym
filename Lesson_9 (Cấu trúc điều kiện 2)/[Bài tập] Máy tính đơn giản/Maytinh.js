// khai báo biến
let firstNumber = null; // Lưu số đầu tiên
let SetOperator = null;    // Lưu toán tử
let resetDisplay = false; // Xóa

const view = document.getElementById('view');

// Thêm số vào màn hình
function number() {
    if (resetDisplay) {
        view.value = number;
        resetDisplay = false;
    } else {
        view.value = view.value === '0' ? number : view.value + number;
    }
}

// Thiết lập toán tử
function operator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(view.value);
        SetOperator = op;
        resetDisplay = true;
    } else {
        alert('Bạn đã chọn toán tử, nhấn "=" hoặc nhập số tiếp theo.');
    }
}

// Tính toán kết quả
function calculate() {
    if (firstNumber !== null && operator !== null) {
        const secondNumber = parseFloat(view.value);
        let result;
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
                break;
            default:
                result = 'Error';
        }
        view.value = result;
        firstNumber = null;
        operator = null;
    } else {
        alert('Vui lòng nhập đủ thông tin để tính toán.');
    }
}

// Xóa màn hình
function clear() {
    view.value = '0';
    firstNumber = null;
    operator = null;
    resetDisplay = false;
}
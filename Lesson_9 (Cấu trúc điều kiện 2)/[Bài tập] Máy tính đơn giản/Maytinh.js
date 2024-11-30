// khai báo biến
let firstNumber = null; // Lưu số đầu tiên
let operator = null;    // Lưu toán tử
let resetDisplay = false; // Xóa

const display = document.getElementById('display');

// Thêm số vào màn hình
function appendNumber(number) {
    if (resetDisplay) {
        display.value = number;
        resetDisplay = false;
    } else {
        display.value = display.value === '0' ? number : display.value + number;
    }
}

// Thiết lập toán tử
function setOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(display.value);
        operator = op;
        resetDisplay = true;
    } else {
        alert('Bạn đã chọn toán tử, nhấn "=" hoặc nhập số tiếp theo.');
    }
}

// Tính toán kết quả
function calculate() {
    if (firstNumber !== null && operator !== null) {
        const secondNumber = parseFloat(display.value);
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
        display.value = result;
        firstNumber = null;
        operator = null;
    } else {
        alert('Vui lòng nhập đủ thông tin để tính toán.');
    }
}

// Xóa màn hình
function clearDisplay() {
    display.value = '0';
    firstNumber = null;
    operator = null;
    resetDisplay = false;
}
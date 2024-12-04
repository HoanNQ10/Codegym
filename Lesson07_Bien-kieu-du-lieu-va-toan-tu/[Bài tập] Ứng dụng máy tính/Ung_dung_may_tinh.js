//Phép tính cộng
function addition(){
    // Lấy giá trị từ các ô nhập
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(number1) || isNaN(number2)) {
        alert("Vui lòng nhập đúng giá trị cho số.");
        return;
    }

    // Tính phép tính cộng
    const result = number1 + number2;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
     <p><strong>Result:</strong> ${result}</p>
    `;
}
// Phép tính trừ
function subtraction(){
    // Lấy giá trị từ các ô nhập
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(number1) || isNaN(number2)) {
        alert("Vui lòng nhập đúng giá trị cho số.");
        return;
    }

    // Tính phép tính trừ
    const result = number1 - number2;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
     <p><strong>Result:</strong> ${result}</p>
    `;
}
// Phép tính nhân
function multiplication(){
    // Lấy giá trị từ các ô nhập
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(number1) || isNaN(number2)) {
        alert("Vui lòng nhập đúng giá trị cho số.");
        return;
    }

    // Tính phép tính nhân
    const result = number1 * number2;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
     <p><strong>Result:</strong> ${result}</p>
    `;
}
// Phép tính chia
function division(){
    // Lấy giá trị từ các ô nhập
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(number1) || isNaN(number2)) {
        alert("Vui lòng nhập đúng giá trị cho số.");
        return;
    }

    // Tính phép tính chia
    const result = number1 / number2;

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
     <p><strong>Result:</strong> ${result}</p>
    `;
}
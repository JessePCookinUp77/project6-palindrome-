function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

document.querySelector("button").addEventListener("click", function () {
  const input = document.querySelector("input[type='text']").value;
  console.log("Input diterima: ", input); // Debug log
  const result = document.querySelector(".result");

  if (input.trim() === "") {
    result.textContent = "Harap masukkan kata atau kalimat!";
    result.className = "result";
  } else if (isPalindrome(input)) {
    console.log("Ini adalah palindrom."); // Debug log
    result.textContent = `"${input}" adalah palindrom!`;
    result.className = "result palindrome";
  } else {
    console.log("Ini bukan palindrom."); // Debug log
    result.textContent = `"${input}" bukan palindrom.`;
    result.className = "result not-palindrome";
  }
});

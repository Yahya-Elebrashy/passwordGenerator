const GeneratePassword = document.getElementById('Generate-Password');
const copy = document.getElementById('copy');
const copied=document.getElementById('copied');
const displayInput = document.getElementById('display-input');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const slideValue = document.querySelector("span");
const inputSlider = document.getElementById('inputSlider');
const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "123456789";
const symbolsList = "!@#$%^&*()_+=-";
let allSelect = "";
let password = "";
GeneratePassword.addEventListener('click', () => {
  copied.classList.add('d-none');
  if (uppercase.checked) {
    allSelect += upperCaseList
  }
  if (lowercase.checked) {
    allSelect += lowercaseList
  }
  if (numbers.checked) {
    allSelect += numbersList
  }
  if (symbols.checked) {
    allSelect += symbolsList
  }

  for (let i = 0; i < inputSlider.value; i++) {
    var random = Math.floor(Math.random() * allSelect.length);

    if (allSelect.length) {
      password += allSelect.charAt(random);

    }
  }
  displayInput.value = password;
  password = '';
  allSelect = "";


})
copy.addEventListener('click', () => {
  if (displayInput.value) {
    copyPassword();
  }
})

function copyPassword() {
  displayInput.select();
  displayInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(displayInput.value);
  copied.classList.remove('d-none');
}



inputSlider.oninput = (() => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value * 10 / 2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (() => {
  slideValue.classList.remove("show");
});

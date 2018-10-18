let inputField = document.querySelector('input');

onlyDigits(inputField);

function onlyDigits(element) {
    element.addEventListener('keydown', (event) => {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || (event.keyCode >= 35 && event.keyCode <= 40)) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}
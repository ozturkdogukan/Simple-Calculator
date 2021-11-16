var islemInput = document.getElementById("islemInput")
var sonuc = document.getElementById("sonuc")


function tikla(deger) {
    switch (deger) {
        case 'ac':
            islemInput.value = ""
            sonuc.value = ""
            break;
        case 'c':
            islemInput.value = islemInput.value.substr(0, islemInput.value.length - 1)
            break;
        case '=':
            hesapla()
            break;

        case '+':
            if (!islemInput.value) {
                if (deger % 5 >= 0) {
                    islemInput.value = deger
                }
            }
            if ((islemInput.value.split('*').length - 1 == 1 || islemInput.value.split('-').length - 1 == 1 || islemInput.value.split('+').length - 1 == 1 || islemInput.value.split('/').length - 1 == 1) && islemInput.value[islemInput.value.length - 1] % 5 >= 0 && islemInput.value.length >= 3) {
                hesapla()
                islemInput.value = islemInput.value.concat("+");
            }
            else if (islemInput.value[islemInput.value.length - 1] % 5 >= 0) {
                islemInput.value = islemInput.value.concat(deger)
            }
            break;

        default:
            if (!islemInput.value) {
                if (deger == '-' || deger % 5 >= 0) {
                    islemInput.value = deger
                }
            }
            else {
                switch (deger) {
                    case "-":
                        if ((islemInput.value.split('*').length - 1 >= 1 || islemInput.value.split('-').length - 1 >= 1 || islemInput.value.split('+').length - 1 >= 1 || islemInput.value.split('/').length - 1 >= 1) && islemInput.value[islemInput.value.length - 1] % 5 >= 0 && islemInput.value.length >= 3) {
                            hesapla()
                            islemInput.value = islemInput.value.concat("-");
                        }
                        else if (islemInput.value[islemInput.value.length - 1] % 5 >= 0 || (islemInput.value[islemInput.value.length - 1] != "-" && deger == "-")) {
                            islemInput.value = islemInput.value.concat(deger)
                        }
                        break;

                    case "*":
                        if ((islemInput.value.split('*').length - 1 >= 1 || islemInput.value.split('-').length - 1 >= 1 || islemInput.value.split('+').length - 1 >= 1 || islemInput.value.split('/').length - 1 >= 1) && islemInput.value[islemInput.value.length - 1] % 5 >= 0 && islemInput.value.length >= 3) {
                            hesapla()
                            islemInput.value = islemInput.value.concat("*");
                        }
                        else if (islemInput.value[islemInput.value.length - 1] % 5 >= 0) {
                            islemInput.value = islemInput.value.concat(deger)
                        }
                        break;

                    case "/":
                        if ((islemInput.value.split('*').length - 1 >= 1 || islemInput.value.split('-').length - 1 >= 1 || islemInput.value.split('+').length - 1 >= 1 || islemInput.value.split('/').length - 1 >= 1) && islemInput.value[islemInput.value.length - 1] % 5 >= 0 && islemInput.value.length >= 3) {
                            hesapla()
                            islemInput.value = islemInput.value.concat("/");
                        }
                        else if (islemInput.value[islemInput.value.length - 1] % 5 >= 0) {
                            islemInput.value = islemInput.value.concat(deger)
                        }
                        break;

                    case ".":
                        if (islemInput.value[islemInput.value.length - 1] % 5 >= 0) {
                            islemInput.value = islemInput.value.concat(deger)
                        }
                        break;
                    default:
                        islemInput.value = islemInput.value.concat(deger)
                        break;
                }
            }
            break;
    }

    console.log(deger)

}

function hesapla() {
    let counter = 0
    let result = 0
    if (islemInput.value.indexOf("+") > 0) {
        counter++
        split = islemInput.value.split('+')
        let toplamaIslemi = islemInput.value.split("+")
        result = parseFloat(toplamaIslemi[0]) + parseFloat(toplamaIslemi[1])
    }
    if (islemInput.value.indexOf('-', 1) > 0) {
        counter++
        split = islemInput.value.split('-')
        let cikarmaIslemi = islemInput.value.split("-")
        if (cikarmaIslemi[0] == "") {
            result = parseFloat(cikarmaIslemi[1]) * -1 + parseFloat(cikarmaIslemi[2] * -1)
        }
        else
            result = parseFloat(cikarmaIslemi[0]) - parseFloat(cikarmaIslemi[1])
    }
    if (islemInput.value.indexOf('*') > 0) {
        result = 1
        counter++
        split = islemInput.value.split('*')
        let carpmaIslemi = islemInput.value.split("*")
        result = parseFloat(carpmaIslemi[0]) * parseFloat(carpmaIslemi[1])
    }

    if (islemInput.value.indexOf('/') > 0) {
        result = 1
        counter++
        split = islemInput.value.split('/')
        let bolmeIslemi = islemInput.value.split("/")
        result = parseFloat(bolmeIslemi[0]) / parseFloat(bolmeIslemi[1])
    }
    islemInput.value = result
}
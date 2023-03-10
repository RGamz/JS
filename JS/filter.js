const string = "Привет! Как дела?";
const vowels = "аиеуыоэяю"
let targetVowels = "";

const getVowels = function(variable) {
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]) == true) {
            targetVowels += string[i]
        }
    }
    return targetVowels
}

console.log(getVowels(string))





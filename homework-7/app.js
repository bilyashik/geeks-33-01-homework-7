var numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];

var mappedNumbers = numbers.map(function (x) {
    return x * 5;
});
console.log("Mapped Numbers:", mappedNumbers);

var filteredNumbers = numbers.filter(function (x) {
    return x > 0;
});
console.log("Filtered Numbers:", filteredNumbers);

var maxNumber = numbers.reduce(function (x, y) {
    return x > y ? x : y;
});
console.log("Maximum Number:", maxNumber);

var minNumber = numbers.reduce(function (x, y) {
    return x < y ? x : y;
});
console.log("Minimum Number:", minNumber);

// задание 2

var names = ["алиса", "ЖЕНЯ", "артем", "ПАВЕЛ", "ЖАКШЫЛЫК", "антон", "айсулуу", "канаим"];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function transliterate(str) {
    var transliterationMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e',
        'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k',
        'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V',
        'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z',
        'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
        'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch',
        'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };

    return str.split('').map(char => transliterationMap[char] || char).join('');
}

var capitalizedNames = names.map(capitalize);
console.log("Capitalized Names:", capitalizedNames);

var latinNames = names.map(transliterate);
console.log("Latin Names:", latinNames);

var namesStartingWithA = names.filter(name => name.charAt(0).toUpperCase() === 'А');
console.log("Names starting with 'A':", namesStartingWithA);

var longestName = names.reduce((acc, name) => acc.length > name.length ? acc : name, "");
console.log("Longest Name:", longestName);

var shortestName = names.reduce((acc, name) => acc.length < name.length ? acc : name, names[0]);
console.log("Shortest Name:", shortestName);
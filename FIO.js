const inputName = document.querySelector('#inputName');

function getFullName() {
    const names = inputName.value.trim().toLowerCase().split(" ");

    const filteredNames = names.filter(item => item !== ''); //фильтруем от пустых строк

    const result = [];

    for (let item of filteredNames) { //меняем везде первую букву на прописную
        const firstCapitalized = item[0].toUpperCase();
        const nameFirstCap = firstCapitalized + item.slice(1);
        result.push(nameFirstCap); //сохраняем все части имени в новый массив
    }
    console.log(result);

    const firstName = document.querySelector('#firstname');
    firstName.innerText = result[0];

    const lastName = document.querySelector('#lastname');
    lastName.innerText = result[1];

    const patronymic = document.querySelector('#patronymic');
    patronymic.innerText = result[2];
}




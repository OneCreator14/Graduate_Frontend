<template>
    <h1>Введите данные</h1>
    <form action="http://5.35.95.153:5000/test" method="get">
        <label>Имя</label><br>
        <input type="text" name="userName" /><br><br>
        <label>Возраст</label><br>
        <input type="number" name="userAge" /><br><br>
        <input type="submit" value="Отправить" />
    </form>

    <button @click="test()">Тест</button>
</template>

<script setup>
function test() {
    let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
    xhr.open('GET', 'http://5.35.95.153:5000/test');
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function (e) {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        }
        else {
            var blob = e.currentTarget.response;
            saveBlob(blob, "Test.docx");
        }
    };

    function saveBlob(blob, fileName) {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.dispatchEvent(new MouseEvent('click'));
    }

    xhr.onerror = function () {
        alert("Запрос не удался");
    };
}




</script>

<style lang="scss" scoped></style>
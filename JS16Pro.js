document.body.onload = addElement;
var elem = newDiv = newTable = null;

function addElement() {
 var newDiv = document.createElement("form");
     newDiv.innerHTML = '<h1>Форма заявки на работу в зоопарке</h1>';
     newDiv.innerHTML = newDiv.innerHTML + '<p><i>Пожалуйста, заполните форму. Обязательные поля помечены</i><span class="required">*</span></p>\
     <fieldset class="contact">\
         <legend>Контактная информация</legend>\
         <div class="data">\
             <label for="name">Имя<span class="required">*</span></label>\
             <input id="name" type="text" minlength="2">\
         </div>\
         <div class="data">\
             <label for="number">Телефон</label>\
             <input id="number" type="tel">\
         </div>\
         <div class="data">\
             <label for="email">Email<span class="required">*</span></label>\
             <input id="email" type="email">\
         </div>\
     </fieldset>';
     newDiv.innerHTML = newDiv.innerHTML + '<fieldset class="contact">\
            <legend>Персональная информация</legend>\
            <div class="data">\
                <label for="age">Возраст<span class="required">*</span></label>\
                <input id="age" type="number">\
            </div>\
            <div class="data">\
                <label for="gender">Пол</label>\
                <select name="gender" id="gender">\
                    <option value="female">Женщина</option>\
                    <option value="male">Мужчина</option>\
                </select><br>\
            </div>\
            <div class="data">\
                 <label for="personalData">Перечислите личные качества</label>\
                <textarea name="personalData" id="personalData" rows="8"></textarea>\
            </div>\
        </fieldset>';
    newDiv.innerHTML = newDiv.innerHTML + '<fieldset id="check">\
    <legend>Выберите Ваших любимых животных</legend>\
    <div>\
        <label for="zebra">\
            <input type="checkbox" id="zebra">Зебра\
        </label>\
        <label for="cat">\
            <input type="checkbox" id="cat" >Кошка\
        </label>\
        <label for="anaconda">\
            <input type="checkbox" id="anaconda">Анаконда\
        </label>\
        <label for="human">\
            <input type="checkbox" id="human">Человек\
        </label>\
        <label for="elefant">\
            <input type="checkbox" id="elefant">Слон\
        </label>\
        <label for="wildebeest">\
            <input type="checkbox" id="wildebeest">Антилопа\
        </label>\
        <label for="pigeon">\
            <input type="checkbox" id="pigeon">Голубь\
        </label>\
        <label for="crab">\
            <input type="checkbox" id="crab">Краб\
        </label>  \
    </div>\
</fieldset>\
<button>Отправить информацию</button>';

 document.body.insertBefore(newDiv, elem);
}
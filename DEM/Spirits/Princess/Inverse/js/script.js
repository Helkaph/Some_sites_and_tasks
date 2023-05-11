let DEM_Back = document.querySelector('#DEM_Back');
let Spirit_Identidy = document.querySelector('#Spirit_Identidy')
let Spirit_Persona = document.querySelector('#Spirit_Persona')
let Spirit_Power = document.querySelector('#Spirit_Power')
let Spirit_Inverse = document.querySelector('#Spirit_Inverse')
let Spirit_Content = document.querySelector('#Spirit_Content')
let close_button = document.querySelector('#close')
let Spirit_Text = document.querySelector('#Spirit_Text')

function CreateContent() {
    Spirit_Content.parentElement.classList.add('Spirit_Info')
    Spirit_Content.classList.remove('Spirit_Content')
    close_button.addEventListener('click', function closeElem() {
        Spirit_Content.parentElement.classList.remove('Spirit_Info')
        Spirit_Content.InnerHTML = '<p id="close">X</p>';
        Spirit_Content.classList.add('Spirit_Content')
        
    })
}

DEM_Back.addEventListener('click', () => {
    window.location.href = '../../../Main/Index.html'
})
Spirit_Identidy.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Волосы имеют фиолетово-белый градиент. Глаза нежно-розовые.</p>
    <p>Рост: 155см, замеры тела: B84/W58/H83</p>
    <p><b><span>Астральное Одеяние:</span></b> по сравнению с оригиналом фиолетовые цвета выделяются более тёмными оттенками, края доспехов на плечах и талии становятся заострёнными, платье в облатси груди и спины становится практически полностью открытой. Двухслойная спектральная юбка становится более тёмной и прозрачной, на руках появляются длинные перчатки вместо доспехов.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `Чрезвычайно холодна, бесчувственна, осторожна и хладнокровна. Почти всё находит неинтересными. Всегда реагирует силой.</p>`
})
Spirit_Power.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `
    <h4><span>Форма Духа</span></h4>
    <table>
        <tr>
            <th>Сила</th>
            <th>Защита</th>
            <th>Духовная энергия</th>
            <th>Ловкость</th>
            <th>Интеллект</th>
        </tr>
        <tr>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
        </tr>
    </table>
    <p><b><span>Король Демонов: Нахема</span></b></p>
    <p><b><span>Оружие:</b> одноручный меч</span></p>
    <p><b><span>Астральное Одеяние:</span></b> <i>безымянное</i></p>
    <p><b><span>Тип ангела:</span></b> Ближний бой с эффектами <<слэша>></p>
    <p><b><span>Дополнительные способности:</span></b> аналогичны оригиналу, иммунитет к направленным атакам
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = '../index.html'
})
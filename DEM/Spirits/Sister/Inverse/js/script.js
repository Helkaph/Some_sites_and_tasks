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
    Spirit_Text.innerHTML = `<p>В инверсии глаза становятся светло-красными. Над головой парит колючий красный ореол. Вокруг шеи также парит подобный ореол. Верхняя часть туловища покрыта лоскутными листами бумаги и отмечена крестообразным узором, напоминающим раны. Окружена плавающими чёрными воротниками, напоминающие оригинальное Астральное Одеяние. Образ дополнен длинным чёрным плащом и кроваво-красным поясом. Руги и ноги покрыты серой тканью, ступни частично обнажены.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Информация отсутствует.</p>`
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
    <p><b><span>Король Демонов: Вельзевул</span></b></p>
    <p><b><span>Оружие:</span></b> книга</p>
    <p><b><span>Астральное Одеяние:</span></b> <i>безымянное</i></p>
    <p><b><span>Тип ангела:</span></b> информационный</p>
    <p><b><span>Дополнительные способности:</span></b> <<Описание Будущего>>, вызов существ, создание мира фантазий.
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = '../index.html'
})
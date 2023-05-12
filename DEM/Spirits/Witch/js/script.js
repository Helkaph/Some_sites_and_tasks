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
    window.location.href = '../../Main/Index.html'
})
Spirit_Identidy.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Глаза и волосы нефритового цвета. </p>
    <p>Рост: <b><span>170см</span></b>; замеры тела - <b><span>B94/W62/H90</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> фиолетовый полупрозрачный костюм, украшенный звёздами разных размеров. Юбка с ремнём из-за разрезов частично оголяет бёдра, а ткань на груди поверх полупрозрачного костюма с трудом скрывает самые сокровенные участки тела. Помимо этого, носит фиолетовый плащ с золотыми вставками и большую шляпу ведьмы с парой крыльев летучей мыши, и с изумрудным камнем, прикреплённым к передней части шляпы.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Имеет проблему физиологического восприятия, из-за чего воспринимала всё вокруг, включая себя. Завидует более привлекательным людям. Решительна и энергична, игривая и кокетливая, любит делать двусмысленные намёки. Несмотря на образ взрослой девушки, зачастую ведёт себя по-детски озорные поступки. Кроме того, имеет форму обращения <<Старшая Сестра>>. </p>`
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
            <td>79</td>
            <td>65</td>
            <td>180</td>
            <td>82</td>
            <td>174</td>
        </tr>
    </table>
    <p><b><span>Ангел: Ханиэль</span></b></p>
    <p><b><span>Оружие</span></b>: метла</p>
    <p><b><span>Астральное Одеяние:</span></b> Адонай Саваоф</p>
    <p><b><span>Тип ангела:</span></b> универсальный, трансформация</p>
    <p><b><span>Дополнительные способности:</span></b> создание другого измерения, копирование навыков и способностей, временное исцеление 
        `
})
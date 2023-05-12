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
    Spirit_Text.innerHTML = `<p>Выглядит лет на 13. Голубые глаза и длинные вьющиеся голубые волосы. На левой руке всегда носит куклу Йошинон - озорного белого кролика, чей правый глаз закрыт повязкой.</p>
    <p>Рост: <b><span>144см</span></b>; замеры тела - <b><span>B73/W55/H78</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> Белое кружевое платье, украшенное розовой лентой, переходящей в бант, а поверх него большой зелёный плащ с широким капюшоном, где располагаются большие кроличье уши. Обувь представлена зелёными сапогами. Из-под плаща выглядывает зелёный хвостик, заканчивающийся розовым бантом и белым помпоном.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Крайне застенчива и пассивна. Поначалу общалась чревовещанием через Йошинон. Субьект <b><span><<Да'ат>></span></b> даёт ей решимость и уверенность в себе. Иногда может повести грубо.`
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
            <td>95</td>
            <td>82</td>
            <td>199</td>
            <td>212</td>
            <td>152</td>
        </tr>
    </table>
    <p><b><span>Ангел: Задкиэль</span></b></p>
    <p><b><span>Оружие</span></b>: кукла, когти, стихия воды и льда.</p>
    <p><b><span>Астральное Одеяние:</span></b> Эль</p>
    <p><b><span>Тип ангела:</span></b> бой через марионетку.</p>
    <p><b><span>Дополнительные способности:</span></b> атаки зубами, когтями марионетки, манипуляции жидкостями в поле видения, смена погоды.</p>
    <p><b><span> Ширион:</span></b> Слияние с её Ангелом. Дух приобретает ледяную броню, когти. В этой форме она способна замораживать и атаковать в пределах всей зоны видимости.
        `
})
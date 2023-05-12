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
    Spirit_Text.innerHTML = `<p>Ученица средней школы с двумя хвостиками, заплетённыими ленточками разного цвета. Длинные кораллового цвета волосы и красные глаза. Обладает раздвоением личности, зависящим от цвета надетых ленточек. В форме Духа её волосы распущенны.
    <p>Рост: <b><span>152см</span></b>; замеры тела - <b><span>B72/W53/H74</span></b></p>
    <p><b><span>Астральное одеяние:</span></b> длинное кимоно в пастельное-красных и нежно-жёлтых тонах с малиновым поясо, связанным коричневой лентой с золотыми узаорами. Рукава окутаны пламенем и обвиты голубыми прозрачными лентами. Из головы <<выходят>> два длинных рога, заплетённых чёрными ленточками. На ногах носит коричневые танкетки и розовые носки.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<h4><span><<Сестра>></span></h4>
    <p>С белыми ленточками она милая, робкая и слабая младшая сестра, зависящая от старшего брата.</p>
    <h4><span><<Командир>></span></h4>
    <p>С чёрными ленточками она уверенный, сильный, харизматичным, иногда циничный лидер, способный управлять дирижаблем <<Фраксинус>>.В форме Духа появляется третья личность, жаждущая исключительно разрушения и битвы.</p>
    `
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
            <td>150</td>
            <td>100</td>
            <td>215</td>
            <td>130</td>
            <td>178</td>
        </tr>
    </table>
    <p><b><span>Ангел: Камаэль</span></b></p>
    <p><b><span>Оружие</span></b>: алебарда</p>
    <p><b><span>Астральное Одеяние:</span></b> Элохим Гибор</p>
    <p><b><span>Тип ангела:</span></b> Ближний и дальний бой, стихия огня</p>
    <p><b><span>Дополнительные способности:</span></b> трансформация алебарды в пушку, регенерация
        `
})

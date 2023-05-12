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
    Spirit_Text.innerHTML = `<p>У Духа короткие пепельно-серые волосы и глаза голубого цвета. Внешне выглядит на 19 лет. Для своего роста худая и хрупкая.</p>
    <p>Рост: <b><span>168см</span></b>; замеры тела - <b><span>B76/W59/H80</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> полупрозрачное серое платье с голубым камнем в области груди. Из-под платья видны чёрные трусики, напоминающие бикини. Разрез в области бедра <<прикрывает>> крест, подвешенный бисерной верёвкой к талии. На голове апостольник того же цвета, что и платье, с украшениями золотистого цвета, а на ногах длинные чёрные сапоги со шнуровкой до колен.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Очень энергичная девушка, зачастую ведущая себя игриво. Из-за своих способностей часть жизни стала одиночкой, с постоянным недоверием к людям. Заядлый отаку.`
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
            <td>60</td>
            <td>59</td>
            <td>142</td>
            <td>64</td>
            <td>245</td>
        </tr>
    </table>
    <p><b><span>Ангел: Разиэль</span></b></p>
    <p><b><span>Оружие</span></b>: книга</p>
    <p><b><span>Астральное Одеяние:</span></b> Йод</p>
    <p><b><span>Тип ангела:</span></b> информационный</p>
    <p><b><span>Дополнительные способности:</span></b> <<Описание Будущего>>, вызов существ, создание мира фантазий
    `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = './Inverse/index.html'
})
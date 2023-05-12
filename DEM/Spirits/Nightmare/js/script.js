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
    Spirit_Text.innerHTML = `<p>Элегантная девушка с хорошими манерами. Брюнетка с длинными неровно заплетёнными хвостами. Правая радужка глаза красного цвета, а левая золотого цвета с циферблатом старинных часов. Носит титул Кошмара за намеренные убийства не менее 10 тысяч человек.</p>
    <p>Рост: <b><span>157см</span></b>; замеры тела - <b><span>B85/W59/H87</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> красно-чёрной платье готической лолиты с оборками. На голове носит бант, поддерживающий волосы.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Очень сложная для понимания личность. Прирождённая актриса с неприязнью,граничащей с недоверием, к человечеству. В нужный момент может сыграть роль вежливой, невинной, любопытной и слабой девушки. Однако, под этой маской скрывается садист, склонный к припадкам и истеричному безумному смеху. Людей считает своей пищей.</p>
    <p>Однако, она чрезвычайно справедлива. Замечено, что все её убийства были совершены над преступниками и обидчиками животных.`
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
            <td>109</td>
            <td>80</td>
            <td>220</td>
            <td>103</td>
            <td>201</td>
        </tr>
    </table>
    <p><b><span>Ангел: Зафкиэль</span></b></p>
    <p><b><span>Оружие</span></b>: часы, флинтлок, мушкет.</p>
    <p><b><span>Астральное Одеяние:</span></b> Элохим</p>
    <p><b><span>Тип ангела:</span></b> Дальний бой, манипуляции со временем.</p>
    <p><b><span>Дополнительные способности:</span></b> поглощение чужого <<времени>>(жизненных сил) для применения способностей за счёт барьера, управление тенями, создание клонов. 
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = './Inverse/index.html'
})
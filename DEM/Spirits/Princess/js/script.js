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
    Spirit_Text.innerHTML = `<p>Невероятно красивая девушка с длинными тёмно-фиолетовыми волосами, а её зрачки в верхней половине окрашены в тёмно-синий цвет, в нижней половине - в розовый и бледно жёлтый. Её волосы обычно привязаны назад аксессуаром в форме бабочки</p>
    <p>Рост: <b><span>155см</span></b>; замеры тела - <b><span>B84/W58/H83</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> платье со вставками чёрного, кремового и розового цветов и набором фиолетово-кремовых доспехов, которые украшали её плечи и талию. Платье открытое сзади и составляет чёрный корсет и двухслойную юбку длиной до колен, цвет которой - розово-белый градиент. Также носит бронированные сапоги и пару перчаток, манжеты которых похожи на лепестки, с той же цветовой схемой, что и её одеяние.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Поначалу холодная, безэмоциональная и осторожная девушка. После событий с <b><span><< Да'атом>></span></b> начала испытывать и выражать эмоции и чувства. Для неё всё в новинку, она весёлая и наивная девушка с частично детскими манерами
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
            <td>230</td>
            <td>202</td>
            <td>125</td>
            <td>142</td>
            <td>32</td>
        </tr>
    </table>
    <p><b><span>Ангел: Сандалфон</span></b></p>
    <p><b><span>Оружие</span></b>: двуручный меч</p>
    <p><b><span>Астральное Одеяние:</span></b> Адонай Мелек</p>
    <p><b><span>Тип ангела:</span></b> ближний бой с эффектами <<слэша>></p>
    <p><b><span>Дополнительные способности:</span></b> защитный барьер, энергетические взрывы, ударные волны, сверхчувствительность(обоняние и интуиция)
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = './Inverse/index.html'
})
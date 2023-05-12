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
    Spirit_Text.innerHTML = `<p>Сладострастная и сексуальная фигура, гладкая кожа. Длинные волосы голубовато-фиолетового цвета, цвет глаз - светлый индиго</p>
    <p>Рост: <b><span>165см</span></b>; замеры тела - <b><span>B94/W63/H88</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> Пышное короткое платье, в основном жёлтого цвета с синими или белыми оборками, покрывающими некоторые части платья. Носит белые колготки и перчатки. Носит заколку в форме жёлтой луны с цветком, соединённым с краями луны. Белые цветы рядом. Также носит колье на шее с прикреплённой к нему белой лилией.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Холодная девушка, которая питает ненависть к мужчинам, а к девушкам относится как к слугам.</p>
    <p>Кокектлива к тем, кто ей понравился. После событий с <b><span><<Да'атом>></span></b> прежнее высокомерие и ненависть к людям ушли. Питает к девушкам слабость. В остальном, <<детская>> личность.</p>`
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
            <td>85</td>
            <td>72</td>
            <td>159</td>
            <td>67</td>
            <td>70</td>
        </tr>
    </table>
    <p><b><span>Ангел: Габриэль</span></b></p>
    <p><b><span>Оружие</span></b>: орга́н</p>
    <p><b><span>Астральное Одеяние:</span></b> Шаддай Эль Кай</p>
    <p><b><span>Тип ангела:</span></b> поддержка, одурманивание сознания, звуковые атаки</p>
    <p><b><span>Дополнительные способности:</span></b> гипноз, усиления тела и сознания, звуковой барьер,промывка мозгов, колебательные атаки.
        `
})
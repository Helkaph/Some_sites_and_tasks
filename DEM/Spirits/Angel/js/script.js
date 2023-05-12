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
    Spirit_Text.innerHTML = `<p>Юная и привлекательная девушка с светло-голубыми глазами и серебристыми короткими волосами, уложенными в боб.</p>
    <p>Рост: <b><span>152см</span></b>; замеры тела - <b><span>B75/W55/H79</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> платье, напоминающее свадебное. Носит золотую корону с прикреплённой к ней вуалью. На платье красуется белый бант с драгоценными камнем, прикреплённым к шее. Юбка платья многослойная, напоминает лепестки цветов.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Во время службы в <b><span>AST</span></b> проявила себя как умный и талантливый боец. В внеслужебнее время она весёлая и застенчивая девушка.</p>
    <p>Незадолго до ухода из госслужбы проявила признаки раздвоения личности и неконтролируемой ярости. После событий с объектом <b><span><<Да'ат>></span></b> пришла в норму, за исключением одержимости к объекту и проявления "особых" увлечений рядом с ним.</p>`
})
Spirit_Power.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `
    <h4><span>Волшебница</span></h4>
    <p>Для мага обладает феноменальными боевыми способностями и не уступающим им интеллектом. Отмечается успешное использование экспериментального вооружения</p>
    <p>Оценка ранга: <b><span>Adeptus-2</span></b></p>
    <h4><span>Снаряжение и оружие></span></h4>
    <ul>
        <li><b><span>Боевой комплект-реалайзер(CR-Unit)</span></b>: комплект механической брони и оружия, разработанных техномагией. С помощью сверхмощных компьютером искажает законы физики и проектирует их в реальный мир.
        <p>Комплект оружия: пистолет, штурмовая винтовка, пулемёт Гатлинга, <b><span>Desert Eagle</span></b>, лазерные мечи <b><span>No Pain</span></b>, тяжёлая снайперская винтовка <b><span>Cry Cry Cry(CCC)</span></b></p></li>
        <li><b><span><<Белая лакрица, DW-029:>></span></b> Модель <b><span>CR-Unit</span></b> для тотального разрушения. Рекомендуемое время использования: 30 минут. Оснашена лазерными кластерными орудиями, магическими пушками, ракетницами, лазерными мечами.</li>
        <li><b><span>CR-Unit "Mordred":</span></b> Подготовленный для Тобиичи комплект оборудования. По предварительным тестам, способен сражаться с превосходством против четырёх Духов с ограниченными Да'атом силами. Оснащён основной артиллерией, лазерным мечом-пушкой <<Кларент>></li>
        <li><b><span>CR-Unit "Brynhildr":</span></b> Разработанный <b><span>Asgard Electronics CR-Unit</span></b>. Ключевой особенностью является его совместимость с силами Духа.</li>
    </ul>
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
            <td>158</td>
            <td>152</td>
            <td>219</td>
            <td>136</td>
            <td>243</td>
        </tr>
    </table>
    <p><b><span>Ангел: Метатрон</span></b></p>
    <p><b><span>Оружие</span></b>: корона</p>
    <p><b><span>Астральное Одеяние:</span></b> Эхйах</p>
    <p><b><span>Тип ангела:</span></b> Дальний бой, лучевое оружие.</p>
    <p><b><span>Дополнительные способности:</span></b> Ускоренный полёт, барьер, телепортация за миг до получения урона.
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = './Inverse/index.html'
})
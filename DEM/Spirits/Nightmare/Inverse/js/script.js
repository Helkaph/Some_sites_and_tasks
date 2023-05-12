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
    Spirit_Text.innerHTML = `<p>Внешне идентичная Токисаки Куруми. Кожа цвета слоновьей кости и длинные, белые волосы, обычно связанные в два ассиметричных хвоста. Правый глаз окрашен в красный цвет, в то время как левый глаз синего цвета имеет обрамление в виде циферблата старинных часов и кажется бездушным, пустым, будто мёртвым. Несмотря на схожесть с Кошмаром, их голоса отличаются.
    <p><b><span>Астральное Одеяние:</span></b> Длинное военное платье с вырезом декольте. Носит белую военно-морскую шляпу и эполеты, подобные тем, что носили солдаты императорской эпохи Франции.</p>
    `

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Безжалостная, жестокая, садисткая, властная и самовлюблённая женщина. Лишена эмоций, таких как любовь и сочувствие.</p>
    <p>Обладает психическим расстройством, разделившим её сознание на несколько частей. Отчего стиль речи отличается от предложением к предложению. Подход к делам так же отличается. Он может быть грубым и прямым, или хитрым и элегантным.</p>`
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
    <p><b><span>Король Демонов: Люцифуг</span></b></p>
    <p><b><span>Оружие:</span></b> астрономические часы, сабля, пистолет</p>
    <p><b><span>Астральное Одеяние:</span></b> неизвестно</p>
    <p><b><span>Тип ангела:</span></b> Дальний бой, манипулирование и контроль пространства</p>
    <p><b><span>Дополнительные способности:</span></b> клонирование, изменение причинно-следственных связей,  исцеление.
    <p><b><span>Пуля скорпион: <<Акрав>></span></b> - Особая способность Королевы, превращающую цель в марионеток-шахматных фигур: <<Ладью>>, <<Коня>> и <<Слона>>. Их количество не может быть больше трёх. Каждая новая фигура перенимает воспоминания предыдущих и усиляются с каждым использованием пули.
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = '../index.html'
})
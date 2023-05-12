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
    Spirit_Text.innerHTML = `<p><b><span>Астральное Одеяние:</span></b> более зловещее, мрачное и откровенное по сравнению с оригиналом. На голове тёмная вуаль.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `"Машина для разрушения" - иными словами описать характер Инверсии невозможно.`
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
            <td>198</td>
            <td>202</td>
            <td>242</td>
            <td>128</td>
            <td>230</td>
        </tr>
    </table>
    <p><b><span>Король Демонов: Сатана</span></b></p>
    <p><b><span>Оружие:</span></b> шипастая корона</p>
    <p><b><span>Астральное Одеяние:</span></b> <i>безымянное</i></p>
    <p><b><span>Тип ангела:</span></b> Дальний бой, лучевое оружие.</p>
    <p><b><span>Дополнительные способности:</span></b> Ускоренный полёт, барьер, телепортация за миг до получения урона. Разрушительная аура гравитации.
        `
})
Spirit_Inverse.addEventListener('click', () => {
    window.location.href = '../index.html'
})
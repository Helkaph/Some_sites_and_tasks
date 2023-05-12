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
    Spirit_Text.innerHTML = `<p>Красивая и привлекательная девушка с длинными светлыми волосами и стройной фигурой. Её волосы всегда заплетены в стиле оданго с синими и фиолетовыми ленточками, напоминающими уши кролика. </p>
    <p>Рост: <b><span>148см</span></b>; замеры тела - <b><span>B91/W60/H88</span></b></p>
    <p><b><span>Астральное Одеяние:</span></b> длинное сиренево-белое платье с вышитыми внутри созвездиями. На руках полупрозрачные перчатки с созвездиями. Носит розово-сиреневые туфли с наколенниками, напоминающую средневековую обувь рыцаря.</p>
    <p>При использовании способности <b><span><<Шифуру>></span></b> Астральное Одеяние немного изменяется: платье становится более плотным и откровенным, появляются фиолетовые чулки, перчатки становятся длиннее. Волосы заплетаются в два хвоста.</p>`

})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `<p>Встречена как хладнокровная, спокойная, безэмоциональная девушка. Характер подобен роботическому. </p>
    <p>После событий с <b><span><<Да'атом>></span></b> показывает истинную личность. Обладает маниакальной привязанностью к любимым. Эмоции чисты и невинны. Говорит о себе в третьем лице устаревшим слогом.</p>`
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
            <td>142(205)</td>
            <td>121(192)</td>
            <td>202(225)</td>
            <td>138(221)</td>
            <td>67</td>
        </tr>
    </table>
    <p><b><span>Ангел: Михаэль</span></b></p>
    <p><b><span>Оружие</span></b>: ключ, алебарда</p>
    <p><b><span>Астральное Одеяние:</span></b> Элоах</p>
    <p><b><span>Тип ангела:</span></b> универсальный, открытие и закрытие</p>
    <p><b><span>Дополнительные способности:</span></b> запечатывание и распечатывание материального и духовного, манипуляциии с пространством и временем, разложение, световые лучи, планетарная бомбардировка, перенаправление, раскрытие истинных сил</p>
    <br>
    <p class="postscriptum"><i>Примечание:</i> в скобках указаны истинные параметры, доступные после использования соответствующей способности <b><span><<Шифуру>></span></b></p>`
})
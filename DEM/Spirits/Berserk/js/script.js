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
    Spirit_Text.innerHTML = `<p>Кагуя и Юзуру - близняшки, соответственно, у них почти одинаковая внешность: светло-рыжие волосы, синие глаза. Отличить можно по причёская: У Кагуи - причёска <<корзинка>>, а У Юзуру волосы заплетены в косичка; либо по размеру груди: у Кагуи грудь меньше, чем у Юзуру.</p>
    <h4><span>Ямай Кагуя</span></h4>
    <p>Худая и хрупкая на вид девушка.
    <p><b><span>Астральное Одеяние:</span></b> основной цвет - фиолетовый. Справа у неё железное крыло с двумя фиолетовыми кристаллами; на правой руке и ноге - цепи. Одета в микро-шорты, высокие сапоги с ремешками чуть выше колен. Носит также перчатки, ремешки и небольшие лоскутки ткани, прикрывающие её грудь. На шее ошейник с замком, а под грудью большой замок с замочной смкважиной. Поверх шорт носит накидку.</p>
    <p>Рост: <b><span>157см</span></b>; замеры тела: <b><span>B79/W56/H81</span></b>.
    <h4><span>Ямай Юзуру</span></h4>
    <p>
    <p><b><span>Астральное Одеяние:</span></b> основной цвет - тёмно-синий. Слева на спине железное крыло с двумя синими кристаллами; на левой руке и ноге - цепи. Одета в юбку-шорты, высокие сапоги с ремешками чуть выше колен. Носит  также ремешки и небольшие лоскутки ткани, но грудь слегка оголена, и между ней располагается замок с замочной скважине. На шее замок с цепью. На плечах у неё накидка
    <p>Рост: <b><span>158см</span></b>; замеры тела: <b><span>B90/W61/H86</span></b>.
    `
})
Spirit_Persona.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `
    <h4><span>Ямай Кагуя</span></h4>
    <p>Открытый и искренний человек с ребяческим характером. Речь и жестикуляция соответствует многим героям и злодеям кино и литературы, с кучей метафор и фразеологизмов.</p>
    <h4><span>Ямай Юзуру</span></h4>
    <p>Спокойный человек, говорящий о себе в третьем лице. Манера речи похожа на робота. Перед тем, как заговорит, произнесёт слово их двухсимвольного кандзи(только существительные) и только потом донесёт суть предложения.`
})
Spirit_Power.addEventListener('click', () => {
    CreateContent();
    Spirit_Text.innerHTML = `

    <h4><span>Форма Духа</span></h4>
    <h4><span>Ямай Кагуя</span></h4>
    <table>
        <tr>
            <th>Сила</th>
            <th>Защита</th>
            <th>Духовная энергия</th>
            <th>Ловкость</th>
            <th>Интеллект</th>
        </tr>
        <tr>
            <td>180</td>
            <td>140</td>
            <td>179</td>
            <td>240</td>
            <td>69</td>
        </tr>
    </table>
    <h4><span>Ямай Юзуру</span></h4>
    <table>
        <tr>
            <th>Сила</th>
            <th>Защита</th>
            <th>Духовная энергия</th>
            <th>Ловкость</th>
            <th>Интеллект</th>
        </tr>
        <tr>
            <td>170</td>
            <td>129</td>
            <td>185</td>
            <td>240</td>
            <td>84</td>
        </tr>
    </table>
    <p><b><span>Ангел: Рафаэль</span></b></p>
    <p><b><span>Оружие</span></b>: копьё, маятник, лук.</p>
    <p><b><span>Астральное Одеяние:</span></b> Элохим Саваоф</p>
    <p><b><span>Тип ангела:</span></b> любая дистанция, стихия ветра.</p>
    <p><b><span>Дополнительные способности:</span></b> физическое усиление, связывание, управление ветром,сверхзвуковые снаряды неизмеримой мощности.
        `
})
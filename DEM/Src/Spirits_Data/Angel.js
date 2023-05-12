import {Spirit} from '../Class/Spirit.js'
let img = new Image('100%', '100%')
img.src = '../Images/Angel.webp'
let descr = <p>Описание: юная девушка с светло-голубыми глазами и серебристыми волосами, уложенные в боб.</p> + <p>Астральное одеяние: свадебное платье с золотой короной и вуалью.</p>
let persona = <p>Личность: малоэмоциональная, умная, осторожная.</p>
let power = <div><table><tr>
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
<p>Ангел: </p></div>
let Angel = new Spirit('Тобиичи Оригами', 'Ангел', descr, persona, power, img, 'ААА')
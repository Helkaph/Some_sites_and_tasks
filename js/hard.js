export function Hard() {
    let body = document.querySelector('body')
    let start = document.querySelector('#start')
    let field = document.querySelector('#field');
    let counter = document.querySelector('#counter')
    let colors = ['red', 'green', 'blue', 'yellow', 'darkmagenta', 'orange', 'cyan']
    let button = document.createElement('button')
    button.innerHTML = 'Режим отладки'
    button.setAttribute('id', 'dev')
    button.style.background = 'white';
    button.style.position = 'absolute'
    button.style.color = 'white'
    body.appendChild(button)
    
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr');
        field.appendChild(tr);;
        for (let j = 0; j < 9; j++) {
            let td = document.createElement('td')
            td.dataset.num = j;
            tr.appendChild(td)
            td.classList.add(colors[getRandomInt(0, 6)]);
        }
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getNextElem(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
            if (elem.getAttribute('class') == arr[i]) {
                if (arr[i] !== 'cyan') {
                    return arr[i + 1]
                } else {
                    return arr[0]
                }
            }
        }
    }
    function changeColor() {
        let elems1 = this.parentElement.previousElementSibling.childNodes;
        let elems2 = this.parentElement.nextElementSibling.childNodes;
        this.setAttribute('class', getNextElem(colors, this))
        if (this.previousElementSibling) {
            this.previousElementSibling.setAttribute('class', getNextElem(colors, this.previousElementSibling))
        }
        if (this.nextElementSibling) {
            this.nextElementSibling.setAttribute('class', getNextElem(colors, this.nextElementSibling))
        }
        for (let elem of elems1) {
            if (this.dataset.num == elem.dataset.num) {
                elem.setAttribute('class', getNextElem(colors, elem))
                elem.previousElementSibling.setAttribute('class', getNextElem(colors, elem.previousElementSibling))
                elem.nextElementSibling.setAttribute('class', getNextElem(colors, elem.nextElementSibling))
            
            }
        }
        for (let elem of elems2) {
            if (this.dataset.num == elem.dataset.num) {
                elem.setAttribute('class', getNextElem(colors, elem))
                elem.previousElementSibling.setAttribute('class', getNextElem(colors, elem.previousElementSibling))
                elem.nextElementSibling.setAttribute('class', getNextElem(colors, elem.nextElementSibling))
            }
        }
    }
    
    let tds = field.querySelectorAll('td')
    
    for (let td of tds) {
        td.addEventListener('click', changeColor)
    }
    
    let count = 0;
    let WinCount = 0;

    field.addEventListener('click', function checkWin(event) {
        let target = event.target;
        if (target.tagName == 'TD') {
            count++;
            let arr = []
            for (let i = 0; i < tds.length; i++) {
            let elem = tds[i].getAttribute('class');
            
            arr.push(elem)
            }
            let dublicates = arr.filter((number, index, numbers) => {
                return numbers.indexOf(number) !== index
            })
            if (dublicates.length == 80) {
                alert('Победа. Возвращаемся в основное меню');
                WinCount++
                if(WinCount == 1) {
                    this.innerHTML = ''
                    this.parentElement.classList.remove('hard_mode')
                    start.style.display = 'flex'
                }
                this.removeEventListener('click', checkWin)
                for (let td of tds) {
                    td.removeEventListener('click', changeColor)
                }
                counter.textContent = '';
            }
        }
        counter.textContent = "Сделано ходов: " + count;
        console.log(WinCount)
        return WinCount;
    })
    
    
}
export default Hard
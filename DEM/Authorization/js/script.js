let DEM_Required = document.querySelector('#DEM_Required');
let DEM_Access = document.querySelector('#DEM_Access');
let ID_Password = document.querySelector('#ID_Password')
let correct = 'qwertyas';
let write = [];
function DEM_Focus() {
    DEM_Required.focus();
}

function login(event) {
    write.push(event.key);
    ID_Password.textContent += '*';
    console.log(write)
    if (write.length == 8) {
        let str = write.join('')
        
        if (str == correct) {
            ID_Password.textContent = '';
            DEM_Required.remove();
            DEM_Required.removeEventListener('keypress', login)
            DEM_Access.style.display = 'flex';
            setTimeout(() => {
                window.location.href = '../Main/index.html'
            }, 3000)
        } else {
            write = [];
            ID_Password.textContent = '';
            throw new Error('False')
            
        }
    }
}
DEM_Required.addEventListener('keypress', login)







console.log(correct)

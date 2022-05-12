'use strict';
alert('Добрый день! Уважаемый проверяющий, прошу Вас проверить мою работу завтра (если у Вас есть такая возможность.). Из-за перегруженности работой, не успел доделать. Спасибо за понимание!');

class Keyboard {
    constructor(keyboard) {
        this.rows;
        this.keys;
        this.status = 0;
    }

    getMarkup() {
        let body = document.querySelector('body');
        let basicMarkup = `<div class="container">
        <div class="night-mode">
          <div class="toggle-circle"></div>
        </div>
  
        <div class="color-changer">
          <div class="colors">
            <input type="color" class="colors-input" />
          </div>
        </div>
  
        <textarea type="text" class="text" value="" autofocus></textarea> 
  
        <div class="keyboard__wrapper">
                  <div class="keyboard__color"></div>
          <div class="keyboard__keys">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <!-- /.keyboard__keys -->
          </div>
          <!-- /.keyboard__wrapper -->
        </div>
      </div>`

        body.innerHTML = basicMarkup;
    }

    getRows() {
        this.rows = document.querySelectorAll('.row');
    }

    getKeys() {
        let keys = {
            row1: {
                '1': {
                    eng: ['`', '~', '`'],
                    rus: ['ё', 'Ё', '`'],
                    'class': ['keys']
                },
                '2': {
                    eng: ['1', '!', '1'],
                    rus: ['1', '!', '1'],
                    'class': ['keys']
                },
                '3': {
                    eng: ['2', '@', '2'],
                    rus: ['2', '"', '2'],
                    'class': ['keys']
                },
                '4': {
                    eng: ['3', '#', '3'],
                    rus: ['3', '№', '3'],
                    'class': ['keys']
                },
                '5': {
                    eng: ['4', '$', '4'],
                    rus: ['4', ';', '4'],
                    'class': ['keys']
                },
                '6': {
                    eng: ['5', '%', '5'],
                    rus: ['5', '%', '5'],
                    'class': ['keys']
                },
                '7': {
                    eng: ['6', '^', '6'],
                    rus: ['6', ':', '6'],
                    'class': ['keys']
                },
                '8': {
                    eng: ['7', '&', '7'],
                    rus: ['7', '?', '7'],
                    'class': ['keys']
                },
                '9': {
                    eng: ['8', '*', '8'],
                    rus: ['8', '*', '8'],
                    'class': ['keys']
                },
                '10': {
                    eng: ['9', '(', '9'],
                    rus: ['9', '(', '9'],
                    'class': ['keys']
                },
                '11': {
                    eng: ['0', ')', '0'],
                    rus: ['0', ')', '0'],
                    'class': ['keys']
                },
                '12': {
                    eng: ['-', '_', '-'],
                    rus: ['-', '_', '-'],
                    'class': ['keys']
                },
                '13': {
                    eng: ['=', '+', '='],
                    rus: ['=', '+', '='],
                    'class': ['keys']
                },
                'backspace': {
                    eng: ['Backspace', 'Backspace', 'Backspace'],
                    rus: ['Backspace', 'Backspace', 'Backspace'],
                    'class': ['keys', 'backspace-key']
                }
            },
            row2: {
                '1': {
                    eng: ['Tab', 'Tab', 'Tab'],
                    rus: ['Tab', 'Tab', 'Tab'],
                    'class': ['keys', 'tab-key']
                },
                '2': {
                    eng: ['q', 'Q', 'Q'],
                    rus: ['й', 'Й', 'Й'],
                    'class': ['keys']
                },
                '3': {
                    eng: ['w', 'W', 'W'],
                    rus: ['ц', 'Ц', 'Ц'],
                    'class': ['keys']
                },
                '4': {
                    eng: ['e', 'E', 'E'],
                    rus: ['У', 'У', 'У'],
                    'class': ['keys']
                },
                '5': {
                    eng: ['r', 'R', 'R'],
                    rus: ['к', 'К', 'К'],
                    'class': ['keys']
                },
                '6': {
                    eng: ['t', 'T', 'T'],
                    rus: ['е', 'Е', 'Е'],
                    'class': ['keys']
                },
                '7': {
                    eng: ['y', 'Y', 'Y'],
                    rus: ['н', 'Н', 'Н'],
                    'class': ['keys']
                },
                '8': {
                    eng: ['u', 'U', 'U'],
                    rus: ['г', 'Г', 'Г'],
                    'class': ['keys']
                },
                '9': {
                    eng: ['i', 'I', 'I'],
                    rus: ['ш', 'Ш', 'Ш'],
                    'class': ['keys']
                },
                '10': {
                    eng: ['o', 'O', 'O'],
                    rus: ['щ', 'Щ', 'Щ'],
                    'class': ['keys']
                },
                '11': {
                    eng: ['p', 'P', 'P'],
                    rus: ['з', 'З', 'З'],
                    'class': ['keys']
                },
                '12': {
                    eng: ['[', '{', '['],
                    rus: ['х', 'Х', 'Х'],
                    'class': ['keys']
                },
                '13': {
                    eng: [']', '}', ']'],
                    rus: ['ъ', 'Ъ', 'Ъ'],
                    'class': ['keys']
                },
                '14': {
                    eng: ['\/', "'\'", "'\'"],
                    rus: ["'\'", "'\'", "'\'"],
                    'class': ['keys', 'slash-key']
                }
            },
            row3: {
                '1': {
                    eng: ['Caps Lock', 'Caps Lock', 'Caps Lock'],
                    rus: ['Caps Lock', 'Caps Lock', 'Caps Lock'],
                    'class': ['keys', 'CL-key']
                },
                '2': {
                    eng: ['a', 'A', 'A'],
                    rus: ['ф', 'Ф', 'Ф'],
                    'class': ['keys']
                },
                '3': {
                    eng: ['s', 'S', 'S'],
                    rus: ['ы', 'Ы', 'Ы'],
                    'class': ['keys']
                },
                '4': {
                    eng: ['d', 'D', 'D'],
                    rus: ['в', 'В', 'В'],
                    'class': ['keys']
                },
                '5': {
                    eng: ['f', 'F', 'F'],
                    rus: ['а', 'А', 'А'],
                    'class': ['keys']
                },
                '6': {
                    eng: ['g', 'G', 'G'],
                    rus: ['п', 'П', 'П'],
                    'class': ['keys']
                },
                '7': {
                    eng: ['h', 'H', 'H'],
                    rus: ['р', 'Р', 'Р'],
                    'class': ['keys']
                },
                '8': {
                    eng: ['j', 'J', 'J'],
                    rus: ['о', 'О', 'О'],
                    'class': ['keys']
                },
                '9': {
                    eng: ['k', 'K', 'K'],
                    rus: ['л', 'Л', 'Л'],
                    'class': ['keys']
                },
                '10': {
                    eng: ['l', 'L', 'L'],
                    rus: ['д', 'Д', 'Д'],
                    'class': ['keys']
                },
                '11': {
                    eng: [';', ':', ';'],
                    rus: ['ж', 'Ж', 'Ж'],
                    'class': ['keys']
                },
                "12": {
                    eng: ["'", '"', "'"],
                    rus: ['э', 'Э', 'Э'],
                    'class': ['keys']
                },
                '13': {
                    eng: ["Enter", "Enter", "Enter"],
                    rus: ["Enter", "Enter", "Enter"],
                    'class': ['keys', 'enter-key']
                }
            },
            row4: {
                '1': {
                    eng: ['Shift', 'Shift', 'Shift'],
                    rus: ['Shift', 'Shift', 'Shift'],
                    'class': ['keys', 'shift-key', 'shift-left']
                },
                '2': {
                    eng: ['z', 'Z', 'Z'],
                    rus: ['я', 'Я', 'Я'],
                    'class': ['keys']
                },
                '3': {
                    eng: ['x', 'X', 'X'],
                    rus: ['ч', 'Ч', 'Ч'],
                    'class': ['keys']
                },
                '4': {
                    eng: ['c', 'C', 'C'],
                    rus: ['с', 'С', 'С'],
                    'class': ['keys']
                },
                '5': {
                    eng: ['v', 'V', 'V'],
                    rus: ['м', 'М', 'М'],
                    'class': ['keys']
                },
                '6': {
                    eng: ['b', 'B', 'B'],
                    rus: ['и', 'И', 'И'],
                    'class': ['keys']
                },
                '7': {
                    eng: ['n', 'N', 'N'],
                    rus: ['т', 'Т', 'Т'],
                    'class': ['keys']
                },
                '8': {
                    eng: ['m', 'M', 'M'],
                    rus: ['ь', 'Ь', 'Ь'],
                    'class': ['keys']
                },
                '9': {
                    eng: [',', '<', ','],
                    rus: ['б', 'Б', 'Б'],
                    'class': ['keys']
                },
                '10': {
                    eng: ['.', '>', '.'],
                    rus: ['ю', 'Ю', 'Ю'],
                    'class': ['keys']
                },
                '11': {
                    eng: ['.', ',', '.'],
                    rus: ['/', '?', '/'],
                    'class': ['keys']
                },
                "12": {
                    eng: ["?", '|', "?"],
                    rus: ['?', '|', '?'],
                    'class': ['keys']
                },
                '13': {
                    eng: ["Shift", "Shift", "Shift"],
                    rus: ["Shift", "Shift", "Shift"],
                    'class': ['keys', 'shift-key', 'shift-right']
                }
            },
            row5: {
                '1': {
                    eng: ['Ctrl', 'Ctrl', 'Ctrl'],
                    rus: ['Ctrl', 'Ctrl', 'Ctrl'],
                    'class': ['keys', 'ctrl-key', 'ctrl-left']
                },
                '2': {
                    eng: ['Eng', 'Eng', 'Eng'],
                    rus: ['Rus', 'Rus', 'Rus'],
                    'class': ['keys', 'lang-key']
                },
                '3': {
                    eng: ['Alt', 'Alt', 'Alt'],
                    rus: ['Alt', 'Alt', 'Alt'],
                    'class': ['keys', 'alt-key', 'alt-left']
                },
                '4': {
                    eng: ['', '', ''],
                    rus: ['', '', ''],
                    'class': ['keys', 'space-key']
                },
                '5': {
                    eng: ['Alt', 'Alt', 'Alt'],
                    rus: ['Alt', 'Alt', 'Alt'],
                    'class': ['keys', 'alt-key', 'alt-right']
                },
                '6': {
                    eng: ['Fn', 'Fn', 'Fn'],
                    rus: ['Fn', 'Fn', 'Fn'],
                    'class': ['keys', 'function-key']
                },
                '7': {
                    eng: ['Ctrl', 'Ctrl', 'Ctrl'],
                    rus: ['Ctrl', 'Ctrl', 'Ctrl'],
                    'class': ['keys', 'ctrl-key', 'ctrl-right']
                }
            },
        }

        this.keys = keys;
    }

    getKeysElements(obj, arr, shift = false, caps = false, lang) {
        let rowCounter = 0;
        let itemCounter = 0;



        for (let row in obj) {
            itemCounter = 0;
            for (let item in obj[row]) {
                let keyElem = document.createElement('div');

                if (this.status == 0) keyElem.setAttribute('class', '');

                for (let key in obj[row][item]) {
                    if (!shift && !caps && this.status == 0) {
                        if (key == lang) {
                            keyElem.textContent = obj[row][item][key][0];
                        }

                        if (key == 'class' && this.status == 0) {
                            obj[row][item][key].forEach(item => {
                                keyElem.classList.add(item);
                            })
                        }
                    }



                    if (shift) {
                        if (key == lang) {
                            let keyContent = arr[rowCounter].children;
                            keyContent[itemCounter].textContent = obj[row][item][key][1];
                            itemCounter++;
                            // console.log(itemCounter)
                        }
                    }

                    if (!shift && this.status == 1) {
                        if (key == lang) {
                            let keyContent = arr[rowCounter].children;
                            keyContent[itemCounter].textContent = obj[row][item][key][0];
                            // console.log(key)
                            itemCounter++;
                        }
                    }


                }

                if (this.status == 0) arr[rowCounter].append(keyElem);
            }
            rowCounter++;
        }
        this.status = 1;
        rowCounter = 0;
        itemCounter = 0;
    }
}

let keyboard = new Keyboard();

keyboard.getMarkup();
keyboard.getRows();
keyboard.getKeys();
keyboard.getKeysElements(keyboard.keys, keyboard.rows, false, false, 'eng');

keyboard




let body = document.querySelector('body');
let keyboard_wrapper = document.querySelector('.keyboard__wrapper');
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space-key');
let shift_left = document.querySelector('.shift-left');
let shift_right = document.querySelector('.shift-right');
let caps_lock_key = document.querySelector('.CL-key');
let night_mode = document.querySelector('.night-mode');
let toggle_circle = document.querySelector('.toggle-circle');
let color_input = document.querySelector('.colors-input');
let change_color = document.querySelector('.color-changer');
let text_input = document.querySelector('.text');
let keyboard_lights = document.querySelector('.keyboard__color');
let lang_key = document.querySelector('.lang-key');
let shiftStatus = false;
let currentLang = lang_key.textContent.toLocaleLowerCase();


for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}


window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('keyname')) {
            keys[i].classList.add('active')
        }
        if (e.code == 'Space') {
            spaceKey.classList.add('active');
        }

        if (e.code == 'ShiftLeft') {
            shift_right.classList.remove('active');
            if (!shiftStatus) {
                keyboard.getKeysElements(keyboard.keys, keyboard.rows, true, false, currentLang);
                shiftStatus = true;
            }
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.remove('active');
            if (!shiftStatus) {
                keyboard.getKeysElements(keyboard.keys, keyboard.rows, true, false, currentLang);
                shiftStatus = true;
            }
        }
        if (e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    }
});

window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('keyname')) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if (e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            shift_right.classList.remove('active');
            shift_right.classList.remove('remove');
            if (shiftStatus) {
                keyboard.getKeysElements(keyboard.keys, keyboard.rows, false, false, currentLang);
                shiftStatus = false;
            }
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
            if (shiftStatus) {
                keyboard.getKeysElements(keyboard.keys, keyboard.rows, false, false, currentLang);
                shiftStatus = false;
            }
        }
        setTimeout(() => {
            keys[i].classList.remove('remove');
        }, 200)
    }
});

night_mode.addEventListener('click', (e) => {
    toggle_circle.classList.toggle('toggle-circle_active');
    body.classList.toggle('body_active');
    keyboard_wrapper.classList.toggle('keyboard__wrapper_active');
    text_input.classList.toggle('text_active');
    night_mode.classList.toggle('night-mode_active');

    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
});

color_input.addEventListener('input', () => {
    for (let i = 0; i < keys.length; i++) {
        keys[i].style.color = color_input.value;
    }

    keyboard_lights.style.background = color_input.value;
});

keys.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.length == 1 || item.classList.contains('keys_night') && item.textContent.length == 1 || item.classList.contains('slash-key')) {
            text_input.value += item.textContent;
        } else if (item.classList.contains('backspace-key')) {
            text_input.value = text_input.value.slice(0, text_input.value.length - 1)
        } else if (item.classList.contains('space-key')) {
            text_input.value += " ";
        } else if (item.classList.contains('enter-key')) {
            text_input.value += "\n";
        } else if (item.classList.contains('tab-key')) {
            text_input.value += "    ";
        }

        item.classList.add('active')
        let timer = setTimeout(() => {
            item.classList.remove('active');
        }, 200);
    })
});

lang_key.addEventListener('click', () => {
    if(currentLang == 'eng') {
        currentLang = 'rus'
        keyboard.getKeysElements(keyboard.keys, keyboard.rows, false, false, currentLang);
        console.log('Lang key');
    } else {
        currentLang = 'eng';
        keyboard.getKeysElements(keyboard.keys, keyboard.rows, false, false, currentLang);
        console.log('Lang key');
    }
});
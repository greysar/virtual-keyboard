'use strict';
alert('Добрый день! Уважаемый проверяющий, прошу Вас проверить мою работу завтра (если у Вас есть такая возможность.). Из-за перегруженности работой, не успел доделать. Спасибо за понимание!');

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
let keyboard_lights = document.querySelector('.keyboard__color')


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
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.remove('active');
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
        }
        if (e.code == 'ShiftRight') {
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
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
        if (item.classList.length == 1 || item.classList.contains('slash-key')) {
            text_input.value += item.textContent;
        } else if (item.classList.contains('backspace-key')) {
            text_input.value = text_input.value.slice(0, text_input.value.length - 1)
        } else if (item.classList.contains('space-key')) {
            text_input.value += " "; 
        }  else if (item.classList.contains('enter-key')) {
            text_input.value += "\n"; 
        }

        item.classList.add('active')
        let timer = setTimeout(() => {
            item.classList.remove('active');
        }, 200);
    })
});
//headline
const display = document.querySelector('#display')

//input variables
const size = document.querySelector('#input-size')
const font = document.querySelector('#select-font')
const style = document.querySelector('#select-style')
const color = document.querySelector('#input-color')
const bg = document.querySelector('#input-bg-color')
const text = document.querySelector('#enter-text')
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showStyle = document.querySelector('#show-style')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')

//input function
function handleInput() {
    const fontSize = size.value
    display.style['font-size'] = fontSize + "px"
    showSize.innerHTML = fontSize
    
    const fontType = font.value
    display.style['font-family'] = fontType
    showFont.innerHTML = fontType

    const fontStyle = style.value
    display.style['font-style'] = fontStyle
    showStyle.innerHTML = fontStyle

    const fontColor = color.value
    display.style['color'] = fontColor
    showColor.innerHTML = fontColor


    const bgColor = bg.value
    display.style['background-color'] = bgColor
    showBgColor.innerHTML = bgColor
    
    const textBox = text.value
    display.innerHTML = textBox
}

//event listeners
size.addEventListener('input', handleInput)
font.addEventListener('input', handleInput)
style.addEventListener('input', handleInput)
color.addEventListener('input', handleInput)
bg.addEventListener('input', handleInput)
text.addEventListener('input', handleInput)



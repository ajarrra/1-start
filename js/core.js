const input = document.querySelector('.input');
const btnBold = document.querySelector('.bold');
const btnItalic = document.querySelector('.italic');
const btnUnderline = document.querySelector('.underline');
const text = document.querySelector('.text');

input.addEventListener('input', function(){
    text.innerText = input.value
})

btnBold.addEventListener('click', function(){
  if(this.classList.contains('active')){
    this.classList.remove('active')
    text.computedStyleMap.fontWeiht = 400
  }else{
    this.classList.add('active')
    text.computedStyleMap.fontWeight = 700
  }
})


btnItalic.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove('active')
      text.computedStyleMap.fontStyle = 'normal'
    }else{
      this.classList.add('active')
      text.computedStyleMap.fontStyle = 'italic'
    }
  })

  btnUnderline.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove('active')
      text.computedStyleMap.textDecoration = 'none'
    }else{
      this.classList.add('active')
      text.computedStyleMap.textDecoration = 'underline'
    }
  })

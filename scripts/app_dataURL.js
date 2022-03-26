function init() {

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  const imageWrapper = document.querySelector('.image_wrapper')
  const buttons = document.querySelectorAll('button')
  const textOutput = document.querySelectorAll('textarea')
  const dataInput = document.querySelector('#data_input')

  const updateImage = (data, img) =>{
    imageWrapper.innerHTML = ''
    img.src = data
    imageWrapper.appendChild(img)
  }

  const output = () =>{
    const uploadFile = document.getElementById('uploadFile')
    const uploadedFiles = uploadFile.files[0]
    const blobURL = window.URL.createObjectURL(uploadedFiles)
    const imageTarget = new Image()
    
    imageTarget.onload = () => {
      const { naturalWidth: w, naturalHeight: h } = imageTarget
      canvas.width = w
      canvas.height = h 
      ctx.drawImage(imageTarget, 0, 0, w, h)

      textOutput[0].innerHTML = canvas.toDataURL()
      const boxHeight = textOutput[0].scrollHeight || 0
      textOutput[0].style.height = `${boxHeight}px`
      buttons[1].classList.remove('display_none')
      
      // const imgData = context.getImageData(0, 0, w, h)
      // textOutput[1].style.padding = '10px'
      // textOutput[1].innerHTML = imgData.data
    }

    updateImage(blobURL, imageTarget)
  }
  

  const outputImage = () =>{
    const imageTarget = new Image()    
    
    imageTarget.onload = () => {
      const { naturalWidth: w, naturalHeight: h } = imageTarget
      canvas.width = w
      canvas.height = h 
      ctx.drawImage(imageTarget, 0, 0, w, h)
    }

    updateImage(dataInput.value, imageTarget)
  }
  
  const copyText = box =>{
    box.select()
    box.setSelectionRange(0, 99999) // For mobile devices 
    document.execCommand('copy')
  }

  buttons[0].onclick = output
  buttons[1].addEventListener('click', ()=> copyText(textOutput[0]))
  buttons[2].onclick = outputImage
}

window.addEventListener('DOMContentLoaded', init)

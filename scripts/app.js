function init() {




  // setUpCanvas()
  //   if (uploadedImageBlobUrl) {
  //     const image = new Image()
  //     image.onload = function() {    
  //       ctx.drawImage(image, 0, 0)
  //       const arr = []
  //       const dotsFromImage = []
  //       for (let i = 0; i < 256; i++) arr.push(i)

  //       arr.forEach(ele=>{
  //         const y = Math.floor(ele / 16) * 20
  //         const x = ele % 16 * 20
  //         ctx.drawImage(image, x, y, 20, 20, x, y, 20, 20)
  //         const c = ctx.getImageData(x + 5, y + 5, 1, 1).data
  //         const hex = '#' + ('000000' + rgbToHex(c[0], c[1], c[2])).slice(-6)
  //         dotsFromImage.push(hex)
  //       })
  //       setDots(dotsFromImage)
  //       drawIntoGrid(dotsFromImage,drawingGrid)
  //     }
  //     image.src = uploadedImageBlobUrl
  //   }
  // }, [uploadedImageBlobUrl])



  // const drawDot = e =>{
  //   if (!draw) return
  //   e.target.style.backgroundColor = drawSetting.color
  //   dots[e.target.id] = drawSetting.color  // record
  // }

  // const drawDotClick = e =>{
  //   const color = e.target.style.backgroundColor === '' ? drawSetting.color : ''
  //   e.target.style.backgroundColor = color
  //   dots[e.target.id] = color
  // }
  
  // const filterPalette = arr =>{
  //   const palette = Array(8).fill('')
  //   for (let i = 0; i < 8; i++){
  //     palette[i] = sortedByFrequencyDuplicatesAndBlankRemoved(arr)[i]
  //   }
  //   return palette
  // }




  // const sortedByFrequencyDuplicatesAndBlankRemoved = array =>{  

  //   const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
  //   const blankRemoved = array.filter(dot=> dot !== '' && dot)
  //   const orderedByFrequency = blankRemoved.map(ele=>{  
  //     return `${ele}_${countOccurrences(blankRemoved,ele)}`
  //   }).sort((a, b) => b.split('_')[1] - a.split('_')[1])  
  //   return [ ...new Set(orderedByFrequency.map(ele=>ele.split('_')[0]))]
  // }


  // const rgbToHex = (r, g, b) => {
  //   if (r > 255 || g > 255 || b > 255)
  //     throw 'Invalid color component'
  //   return ((r << 16) | (g << 8) | b).toString(16)
  // }


  // const dynamicSort = property => {
  //   let sortOrder = 1

  //   if (property[0] === '-') {
  //     sortOrder = -1
  //     property = property.substr(1)
  //   }

  //   return function (a,b) {
  //     if (sortOrder === -1){
  //       return b[property].localeCompare(a[property])
  //     } else {
  //       return a[property].localeCompare(b[property])
  //     }        
  //   }
  // }

}

window.addEventListener('DOMContentLoaded', init)
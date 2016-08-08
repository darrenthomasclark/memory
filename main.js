const init = () => {
 for (let j = 0; j < 2; j++) {
   setNumArray()
   for (let i = 0; i < 18; i++) {
     let num = getImageNum()
     const bgImg = "url('./images/backside.png')"
     const cardImg = `url('./images/boss${num + 1}.png')`
     const images = document.querySelector('.images')
     const div = document.createElement('div')
     div.className = `img ${i}`
     div.style.backgroundImage = bgImg
     div.addEventListener('click', function () {
       handleImgClick.call(this, i, cardImg, bgImg, init)
     })
     images.appendChild(div)
   }
 }
}
document.addEventListener('DOMContentLoaded', init)
// const init = () => {
//   //setNumArray()
//   //drawBoard()
//   const rows = document.querySelectorAll('tr')
//   for (let i = 0; i < rows.length; i++) {
//     const cols = rows[i].querySelectorAll('td')
//     for (let j = 0; j < cols.length; j++) {
//       cols[j].addEventListener('click', () => {
//         handleClickEvent()
//       })
//     }
//   }
// }
// document.addEventListener('DOMContentLoaded', init)

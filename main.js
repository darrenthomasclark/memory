const handleImgClick = () => {
  console.log('WINNNNNING!!!!!')
}

const init = () => {
  for (var i = 0; i < 36; i++) {
    const img = `url('./images/boss00${i + 1}.png')`
    const images = document.querySelector('.images')
    const div = document.createElement('div')
    div.className = 'img'
    div.style.backgroundImage = img
    div.addEventListener('click', handleImgClick)
}
}
    images.appendChild(div)
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

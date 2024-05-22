
const darkBtn = document.querySelector('.dark-btn')
const selectBox = document.querySelector('.select-box')
const searchArea = document.querySelector('.search-area')
const allText = document.querySelector('.all__text')

darkBtn.addEventListener('click', function () {
    // alert('salom')

    if (darkBtn.style.display != "flex") {
        darkBtn.style.display = "flex"
        darkBtn.style.flexDirection = "column"
        darkBtn.style.alignItems = "flex-end"
        darkBtn.style.backgroundColor = "#A445ED"

        document.body.style.backgroundColor = "#000"
        selectBox.classList.add('dark', "darkBg")
        searchArea.style.backgroundColor = "#1f1f1f"
        searchArea.classList.add('dark')
        allText.classList.add('dark')

    }else {
        darkBtn.style.display = "block"
        darkBtn.style.backgroundColor = "#757575"        
        document.body.style.backgroundColor = "#FFF"
        selectBox.classList.remove('dark', "darkBg")
        searchArea.style.backgroundColor = "#f4f4f4"
        searchArea.classList.remove('dark')
        allText.classList.remove('dark')




    }


})
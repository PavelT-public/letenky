function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('trida')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
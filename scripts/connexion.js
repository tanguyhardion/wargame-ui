vex.dialog.prompt({
    message: 'Veuillez choisir un pseudo :',
    placeholder: 'Pseudo',
    callback: function (value) {
        console.log(value)
    }
})
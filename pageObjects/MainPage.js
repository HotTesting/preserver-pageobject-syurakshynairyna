class MainPage {

        constructor() {
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
    }

    //Создаст заметку на странице
    createNotes(title, body) {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.MainPage = MainPage
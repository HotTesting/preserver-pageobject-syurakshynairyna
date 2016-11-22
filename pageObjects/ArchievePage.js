class ArchievePage {

    constructor() {
        this.buttonToArchieve = $('.grid-container [title~=Archive]')
        this.pageArchieveNotes = $('#navbar .glyphicon-option-vertical')
        this.archieveLink = $(" .navbar-right a[href='/preserver/archive-notes']")
    }

       archieveNote() {
        this.buttonToArchieve.click()
        this.pageArchieveNotes.click()
        this.archieveLink.click()

    }

    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.ArchievePage = ArchievePage
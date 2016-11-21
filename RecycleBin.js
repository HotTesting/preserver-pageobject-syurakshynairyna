
class RecycleBin {

        constructor() {
        this.buttonToDelete = $('.grid-container [title~=Delete]')
        this.pageDeleteNotes = $('#navbar .glyphicon-option-vertical')
        this.DeleteLink = $(".navbar-right a[href='/preserver/recycle-bin']")
    }

       deleteNote() {
        this.buttonToDelete.click()
        this.pageDeleteNotes.click()
        this.DeleteLink.click()

    }

    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.RecycleBin = RecycleBin
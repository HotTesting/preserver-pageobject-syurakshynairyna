
class About {

    constructor() {
     
        this.left_arrow = $('.fa-arrow-left')
        this.github = $('.fa-github')
        this.twitter = $('.fa-twitter')
        this.menu = $('src="/logo.png"')

    }

    go () {

        $('src="/logo.png"').click()
        browser.sleep(5000)
        this.menu.click()
    }
 
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.About = About
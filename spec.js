//Импорт пейдж обджекта из другого файла
let NotesPage = require('./NotesPage.js').NotesPage
let ArchievePage = require('./ArchievePage.js').ArchievePage
let MainPage = require('./MainPage.js').MainPage
let RecycleBin = require('./RecycleBin.js').RecycleBin
let About = require('./AboutPage.js').About

//Просто наш базовый URL для работы
let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests', function () {
    let notesPage = new NotesPage()

beforeEach(function () {
      browser.get(URL)
      browser.sleep(5000)

    })

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })

    it('should be created when title and body provided', function () {
        
        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1, 'Notes count should be 1 after created')
    })

    it('should be created when only title provided', function () {
        
        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(1, 'Notes count should be 1 after created')
    })

    it('should be created when only body provided', function () {

        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(1, 'Notes count should be 1 after created')
         
    })

    it('should NOT be created when nothing provided', function () {

        notesPage.createNote('', '')
        expect(notesPage.getNotes().count()).toBe(0, 'Notes count should be 0')
      
    })
    

})

describe('Preserver Achieve tests', function() {
    let archievePage = new ArchievePage()
    let mainPage = new MainPage()
  
    beforeEach(function () {
      browser.get(URL)
      browser.sleep(5000)
    })

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })
 
    it('should be moved to Achieve Notes', function () {
        mainPage.createNotes('Note for achieving', 'Archieve')
        archievePage.archieveNote()
        browser.sleep(5000)
    
    expect(archievePage.getNotes().count()).toBe(1, 'Notes count should be 1 after archieved')
    })

})

describe('Preserver Delete tests', function() {
    let recyclebin = new RecycleBin()
    let mainPage = new MainPage()
   
    beforeEach(function () {
      browser.get(URL)
      browser.sleep(2000)

    })

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })
 
    it('Should be removed to recycle bin', function () {
        mainPage.createNotes('Note for deleting', 'Delete')
        browser.sleep(2000)
        recyclebin.deleteNote()
        browser.sleep(2000)
    
    expect(recyclebin.getNotes().count()).toBe(1, 'Notes count in recycle bin should be 1')
    })

})


describe('Preserver tests About Page', function () {
    
    let about = new About()


    it('should redirect to AboutPage from NotePage', function () {
        
        browser.get('./notes')
        browser.sleep(3000)
        about.go()
        browser.sleep(2000)
        expect(browser.getCurrentUrl()).toBe('http://www.hiteshbalar.com/preserver/about')
    })

    it('all elements should be visible', function () {

        browser.sleep(3000)
        expect(about.left_arrow.isDisplayed()).toBe(true)
        expect(about.github.isDisplayed()).toBe(true)
        expect(about.twitter.isDisplayed()).toBe(true)
        
    })

})
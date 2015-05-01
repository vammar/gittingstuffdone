var webdriverjs = require( "webdriverio" )

module.exports = function() {

  this.Before( "@browser"
  , function( callback ) {
      this.browser = webdriverjs.remote( {
          desiredCapabilities: { browserName: "chromedriver" }
        , logLevel: 'info'
        } 
      )

      this.browser.init()
      callback()
    }
  )

  this.After( "@browser"
  , function( callback ) {
      this.browser.end( callback )
    }
  )

}


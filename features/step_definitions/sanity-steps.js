var assert = require( "assert" )

module.exports = function() {

  this.Given( /^I'm on the test screen$/
  , function( next ) {
      this.browser.url( "http://localhost:8080/tests" ).call( next )
    }
  )

  this.Then( /^I should see "([^"]*)" in the title$/
  , function( expectedTitle, next ) {
      this.browser.getTitle( thenAssertEqual( expectedTitle ) ).call( next )
    }
  )
}

function thenAssertEqual( expected ) {
  return function( err, string ) { assert.equal( string, expected ) }
}


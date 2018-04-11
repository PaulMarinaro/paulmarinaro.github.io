var Browser = require('zombie');
var browser = new Browser();

const server = 'http://localhost:7777';

describe('Well of HTML', function(){

  beforeEach(function(done) {
    browser.visit(server, done);
  });

  it('should have a title A Well of HTML', function(done){
    browser.assert.text('title', 'A Well of HTML');
    done();
  });

  it('should have an <a> tag', function(done){
    browser.assert.elements('a', {atLeast: 1}, 'You\'re missing a <a> tag');
    done();
  });

  it('should have an <img> tag', function(done){
    browser.assert.elements('img', {atLeast: 1}, 'You\'re missing a <img> tag');
    done();
  });

  it('should have all header tags', function(done){
    browser.assert.elements('h1', {atLeast: 1}, 'You\'re missing a <h1> tag');
    browser.assert.elements('h2', {atLeast: 1}, 'You\'re missing a <h2> tag');
    browser.assert.elements('h3', {atLeast: 1}, 'You\'re missing a <h3> tag');
    browser.assert.elements('h4', {atLeast: 1}, 'You\'re missing a <h4> tag');
    browser.assert.elements('h5', {atLeast: 1}, 'You\'re missing a <h5> tag');
    browser.assert.elements('h6', {atLeast: 1}, 'You\'re missing a <h6> tag');
    done();
  });

  it('should have a <p> tag', function(done){
    browser.assert.elements('p', {atLeast: 1}, 'You\'re missing a <p> tag');
    done();
  });

  it('should have all emphasis tags', function(done){
    browser.assert.elements('b', {atLeast: 1}, 'You\'re missing a <b> tag');
    browser.assert.elements('i', {atLeast: 1}, 'You\'re missing an <i> tag');
    browser.assert.elements('em', {atLeast: 1}, 'You\'re missing an <em> tag');
    browser.assert.elements('strong', {atLeast: 1}, 'You\'re missing a <strong> tag');
    done();
  });

  it('should have all list tags', function(done){
    browser.assert.elements('ol', {atLeast: 1}, 'You\'re missing an <ol> tag');
    browser.assert.elements('ul', {atLeast: 1}, 'You\'re missing a <ul> tag');
    browser.assert.elements('li', {atLeast: 2}, 'You\'re missing an <li> tag');
    done();
  });

  it('should have all definition tags', function(done){
    browser.assert.elements('dl', {atLeast: 1}, 'You\'re missing a <dl> tag');
    browser.assert.elements('dt', {atLeast: 1}, 'You\'re missing a <dt> tag');
    browser.assert.elements('dd', {atLeast: 1}, 'You\'re missing a <dd> tag');
    done();
  });

  it('should have all form tags', function(done){
    browser.assert.elements('form', {atLeast: 1}, 'You\'re missing a <form> tag');
    browser.assert.elements('label', {atLeast: 1}, 'You\'re missing a <label> tag');
    browser.assert.elements('input', {atLeast: 1}, 'You\'re missing an <input> tag');
    browser.assert.elements('textarea', {atLeast: 1}, 'You\'re missing an <textarea> tag');
    browser.assert.elements('button', {atLeast: 1}, 'You\'re missing an <button> tag');
    done();
  });

  it('should have all table tags', function(done){
    browser.assert.elements('table', {atLeast: 1}, 'You\'re missing a <table> tag');
    browser.assert.elements('thead', {atLeast: 1}, 'You\'re missing a <thead> tag');
    browser.assert.elements('tbody', {atLeast: 1}, 'You\'re missing a <tbody> tag');
    browser.assert.elements('tfoot', {atLeast: 1}, 'You\'re missing a <tfoot> tag');
    browser.assert.elements('tr', {atLeast: 3}, 'You\'re missing a <tr> tag');
    browser.assert.elements('th', {atLeast: 1}, 'You\'re missing a <th> tag');
    browser.assert.elements('td', {atLeast: 3}, 'You\'re missing a <td> tag');
    done();
  });

  it('should have a <div> tag', function(done){
    browser.assert.elements('div', {atLeast: 1}, 'You\'re missing a <div> tag');
    done();
  });

  it('should use flexbox', function(done){
    browser.assert.elements('.flex-row', {atLeast: 1}, 'Add the class "flex" to an element and use flexbox!');
    browser.assert.elements('.flex-row > *', {atLeast: 2}, 'Add more children to the "flex" element to see more results from flexbox!');
    done();
  });

  it('should use a bootstrap grid', function(done){
    browser.assert.elements('.row', {atLeast: 1}, 'Add the class "row" to an element so your bootstrap grid will work!');
    browser.assert.elements('.row > *', {atLeast: 2}, 'Add more children to the "row" element to make your grid!');
    done();
  });

});

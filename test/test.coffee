should = require 'should'
powerfs = require '../powerfs'
fs = require 'fs'

describe 'writeFile', ->

  it 'should create the directory tree for the desired filename', (done) ->
    path = "tmp/#{new Date().getTime()}/apa.txt"
    powerfs.writeFile path, 'foobar', 'utf8', ->
      fs.readFile path, 'utf8', (err, content) ->
        content.should.eql 'foobar'
        done()

var Twit = require('twit')
var os = require('os')
var fs = require('fs')
var watch = require('watch')
var _ = require('lodash')
var config = require('./config')
var t = new Twit(config)

// Get path of dictionary directory
var dictDir = os.homedir() + '/Library/Spelling'

console.log('Bot is watching for changes...\n')

fs.readFile(dictDir + '/en', 'utf8', (err, data) => {
  if (err) throw err
  // Save file contents to an array
  var oldFile = data.toString().split('\n')

  watch.createMonitor(dictDir, (monitor) => {
    // Stat watching for changes in file 'en'
    monitor.files[dictDir + '/en']
    // Look if 'en' is changed
    monitor.on('changed', function (file, curr, prev) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err
        // Save contents of 'en' to new array
        var newFile = data.toString().split('\n')
        // Compare both arrays
        var difference = _.xor(oldFile, newFile)
        if (difference.length !== 0) {
          for (var i in difference) {
            console.log(`New word: "${difference[i]}"`)
            // Send the tweet containing the newly added word
            sendTweet(difference[i])
          }
          oldFile = newFile
          newFile = []
        }
      })
    })
  })
})

function sendTweet (word) {
  t.post('statuses/update', {status: word}, (err, data, res) => {
    if (err) throw err
    console.log('Send to Twitter.\n')
  })
}

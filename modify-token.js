var fs = require('fs')

var files = fs.readdirSync('./dist/static/js')

var appFileName = null
for (var i = files.length - 1; i >= 0; i--) {
  if (/^app\.\w+\.js$/.test(files[i])) {
    appFileName = files[i]
    break
  }
}

if (!appFileName) return console.error('Error: Modify the token failed because the file does not match!')

appFileName = './dist/static/js/' + appFileName

var buf = fs.readFileSync(appFileName)

var sMark = 'access_token:'

var index = buf.indexOf(sMark)

var token = buf.slice(index, index + sMark.length + 42)

token = token.toString().split('"')[1]

if (token.length !== 40) return console.error('Error: Modify the token failed! Please check your access_token!')

var a = token.slice(0, 20)
var b = token.slice(20)

buf = buf.toString().replace(token, a + '"+"' + b)

fs.writeFileSync(appFileName, buf)

console.log('Success: modify token success!')

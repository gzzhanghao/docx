import parseDocx from '.'

Promise.resolve().then(async () => {

  const docx = await parseDocx(fs.readFileSync('./sample.docx'))

  console.log(JSON.stringify(docx, null, 2))

}).catch(error => {

  console.error(error.stack)
})

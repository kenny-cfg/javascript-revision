const allParagraphs = document.getElementsByTagName('p')

for (let i = 0; i < allParagraphs.length; i++) {
  const paragraph = allParagraphs[i]
  paragraph.innerText = `This is paragraph ${i}`
}
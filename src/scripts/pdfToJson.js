// import fs from 'fs';
// import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
//
// const pdfPath = process.argv[2] || './pdfs/pdf-exp.pdf';

// async function pdfToText(pdfPath) {
//     const data = new Uint8Array(fs.readFileSync(pdfPath));
//     const pdfDocument = await getDocument({data}).promise;
//     const pagesText = [];
//
//     for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
//         const page = await pdfDocument.getPage(pageNum);
//         const textContent = await page.getTextContent();
//         const pageText = textContent.items.map(item => item.str).join(' ');
//         pagesText.push({
//             page: pageNum,
//             content: pageText
//         });
//     }
//
//     return pagesText;
// }
//
// pdfToText(pdfPath)
//     .then(pagesText => {
//         console.log(JSON.stringify(pagesText, null, 2));
//         fs.writeFileSync('./output.json', JSON.stringify(pagesText, null, 2));
//     })
//     .catch(err => {
//         console.error('Error: ', err);
//     });

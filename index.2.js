const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const t1 = new Date().getTime();
  console.log('starting……')
  const renderSingle = async (i) => {
    const p = await browser.newPage();
    await p.goto('http://127.0.0.1:8080/index2.html');
    const img = await p.screenshot();
    const t3 = new Date().getTime();
    console.log('single time:', (t3 - t1) / 1000.0);
    return img
  };
  const pages = [];
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  await renderSingle()
  const images = await Promise.all(pages);
  const t2 = new Date().getTime();
  console.log('total time:', (t2 - t1) / 1000.0)

  await browser.close();
})();
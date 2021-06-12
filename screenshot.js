import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com");
  await page.screenshot({
    path: "~/Documents/downloads/screenshot.png",
    format: "a4",
  });
  await browser.close();
})();

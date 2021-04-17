import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://developers.google.com/web/tools/puppeteer/get-started"
  );
  await page.screenshot({ path: "screenshot.png", format: "a4" });
  await browser.close();
})();

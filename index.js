import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.notion.so/dreamcometrue8/2020-2-3413507734914599a8ffa15609f1e60d",
    {
      waitUntil: "networkidle0",
    }
  );
  await page.type("#notion-email-input-1", process.env.NotionID);
  await page.keyboard.press("Enter");
  await page.waitForSelector("#notion-password-input-2");

  await page.type("#notion-password-input-2", process.env.NotionPW);
  await page.keyboard.press("Enter");

  await page.waitForSelector(".notion-selectable.notion-page-block");

  // 현재, 원하는 데이터를 받아오지 못하는 상황

  console.log(
    await page.evaluate(() => {
      document.querySelector(
        ".notion-selectable.notion-page-block > a > .notion-focusable > div"
      );
    })
  );
  // .notion-focusable > div > div > .notranslate
  // let diaries = await page.$$eval(
  //   ".notion-focusable > div > div > .notranslate",
  //   (elements) => {
  //     elements = elements.map(
  //       (element) => element.querySelector("span").textContent
  //     );
  //     return elements;
  //   }
  // );
  // console.log(diaries);
  // await page.click(".notranslate");
  // await page.click(".dots", {
  // delay: 500,
  // });
  // dots
  // const searchValue = await page.$eval(
  //   "#search_form_input_homepage",
  //   (el) => el.value
  // );
  // console.log(searchValue);
  // await browser.close();
})();

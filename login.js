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
  await page.keyboard.press("Enter", {
    delay: 500,
  });
  await page.type("#notion-password-input-2", process.env.NotionPW);
  await page.keyboard.press("Enter", {
    delay: 2000,
  });

  await page.click(".notion-selectable.notion-page-block");
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

import { Dataset, createPlaywrightRouter, sleep } from "crawlee";

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ request, page, parseWithCheerio, log }) => {
  log.info(`enqueueing new URLs`);
  const link = request.loadedUrl;
  await sleep(5000);
  const items = page.locator("div.scaffold-finite-scroll__content>ul.pvs-list>li");
  console.log(await items.count());

  const details = [];

  for (let i = 0; i < (await items.count()); i++) {
    const item = items.nth(i);
    const designation = await item
      .locator(".display-flex.align-items-center.mr1.t-bold")
      .first()
      .innerText()
      .then((x) => x.split("\n")[0])
      .catch(() => "null");
    const date = await item
      .locator("span.pvs-entity__caption-wrapper")
      .innerText()
      .catch(() => "null");
    const companyLink = await item
      .locator("a")
      .first()
      .getAttribute("href")
      .catch(() => "null");
    details.push({ designation, date, companyLink });
  }

  console.log({link, details});

  await Dataset.pushData({
    link,
    details
  });

  await Dataset.exportToCSV('data');

  await sleep(10000);
});
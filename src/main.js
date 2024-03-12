// For more information, see https://crawlee.dev/
import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';
import fs from "fs";

const startUrls = ["https://www.linkedin.com/in/jaydeep-chotaliya-0b9891131/"].map((url) => {
    url = url.split('?')[0];
    if(url.endsWith("/")) {
        url = url.slice(0, -1);
    }
    url = `${url}/details/experience`;
    return { url };
});

let isAuth = fs.existsSync("./auth");

let session = [];

if (isAuth) {
  session = JSON.parse(fs.readFileSync("./auth"));
}

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    headless: false,
      preNavigationHooks: [
    async ({ page, browserController }) => {
      await browserController.setCookies(page, session);
      page.setViewportSize({ width: 1024, height: 500 });
    },
  ],
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 20,
});

await crawler.run(startUrls);

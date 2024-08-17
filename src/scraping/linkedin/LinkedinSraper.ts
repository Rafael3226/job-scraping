import { Page } from "puppeteer";
import { getLinkedinJobSearchURL, LINKEDIN_LOGIN_URL } from "./url";

export class LinkedinScraper {
  public constructor(private page: Page) {}

  public async execute() {}

  public async setup(): Promise<void> {
    await this.page.setViewport({ width: 1080, height: 1024 });
  }

  public async login(credentials: Credentials): Promise<void> {
    await this.page.goto(LINKEDIN_LOGIN_URL);
    await this.page.locator("#username").fill(credentials.username);
    await this.page.locator("#password").fill(credentials.password);
    await this.page
      .locator("button")
      .filter((button) => button.innerText === "Sign in")
      .click();
    await this.page.waitForSelector("#global-nav");
  }

  public async scraping(params: LinkedinSearchParams): Promise<string[]> {
    await this.page.goto(getLinkedinJobSearchURL(params));
    await this.page
      .locator(".jobs-search-results-list")
      .scroll({ scrollTop: 1200 });
    const jobIds = await this.page.evaluate(() => {
      const lis = document.querySelectorAll("li[data-occludable-job-id]");
      return Array.from(lis)
        .map((li) => li.getAttribute("data-occludable-job-id"))
        .filter((n) => n !== null);
    });

    return jobIds;
  }
}

import puppeteer from "puppeteer";
import { LinkedinScraper } from "./LinkedinSraper";
// Or import puppeteer from 'puppeteer-core';

const paramExamp = {
  geoId: "105646813",
  keywords: ".NET",
  //   currentJobId: "4000078132",
  //   distance: "25",
  //   origin: "JOBS_HOME_KEYWORD_HISTORY",
  //   refresh: "true",
  //   start: "25",
};
const LinkedinCredentials = {
  username: process.env.LINKEDIN_USERNAME ?? "",
  password: process.env.PASSWORD ?? "",
};
export const geoIds = {
  SPAIN: 105646813,
};

export async function scraping() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false, // Set to false to show the browser
  });

  const page = await browser.newPage();

  const linkedinScraper = new LinkedinScraper(page);
  await linkedinScraper.setup();
  await linkedinScraper.login(LinkedinCredentials);
  const jobIds = await linkedinScraper.scraping(paramExamp);
  await browser.close();
  console.log(jobIds);
  return jobIds;
}

const jobIds = scraping();
console.log(jobIds);

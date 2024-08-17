export const LINKEDIN_LOGIN_URL = "https://www.linkedin.com/login";
export const LINKEDIN_JOBS_URL = "https://www.linkedin.com/jobs/search/";
export const LINKEDIN_JOB =
  "https://www.linkedin.com/jobs/view/{currentJobId}/";

export function getLinkedinJobSearchURL(params: LinkedinSearchParams): string {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, value);
  }
  return `${LINKEDIN_JOBS_URL}?${searchParams.toString()}`;
}

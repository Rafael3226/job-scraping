interface Credentials {
  username: string;
  password: string;
}

interface LinkedinSearchParams {
  geoId: string;
  keywords: string;
  currentJobId?: string;
  distance?: string;
  origin?: string;
  refresh?: string;
  start?: string;
}

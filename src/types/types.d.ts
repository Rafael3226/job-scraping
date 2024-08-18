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

interface Company {
  name: string;
  image: string;
  url: string;
  linkedin: string;
}

interface Job {
  company: Company;
  title: string;
  location: string;
  description: string;
  date: string;
  linkedin: string;
  apply: string;
}

export interface Root {
  users: User[]
  companies: Company[]
  applications: Application[]
  jobs: Job2[]
  candidate: Candidate[]
}

export interface User {
  id: number
  username: string
  password: string
  role: string
  companyId?: number
  candidateId?: number
}

export interface Company {
  id: number
  name: string
  description: string
  location: string
  jobs: Job[]
  contact: Contact
}

export interface Job {
  id: number
  title: string
  description: string
  skills: string[]
  location: string
}

export interface Contact {
  email: string
  phone: string
}

export interface Application {
  id: number
  jobId: number
  candidateId: number
  status: string
}

export interface Job2 {
  id: number
  title: string
  description: string
  skills: string[]
  location: string
  companyId: number
}

export interface Candidate {
  id: number
  name: string
  prenom: string
  password?: string
  email: string
  github: string
  linkedin: string
  twitter: string
  website: string
  location?: Location
  summary: string
  competence?: Competence[]
  certifications: Certification[]
  experience: Experience[]
  hobbies: Hobby[]
  education: Education[]
  projects: Project[]
  publications: Publication[]
  languages: Language[]
  phone?: string
  country?: string
  city?: string
  compétence?: Comptence[]
}

export interface Location {
  country: string
  city: string
}

export interface Competence {
  name: string
  neveau: string
}

export interface Certification {
  name: string
  date: string
}

export interface Experience {
  title: string
  company: string
  dates: string
  location: string
  description: string
}

export interface Hobby {
  hobby: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  dates: string
  location: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
}

export interface Publication {
  title: string
  publication: string
  year: string
}

export interface Language {
  language: string
  proficiency: string
}

export interface Comptence {
  name: string
  neveau: string
}



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
  name: number
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
  idCompany:number
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

export interface Job {
  id: number
  title: string
  description: string
  skills: string[]
  location: string
  companyId: number
}

export interface Candidate {
  id: number
  nom: string
  prenom: string
  password?: string
  email: string
  github: string
  linkedin: string
  summary: string
  skills?: Skill[]
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
}


export interface Skill{
  name: string
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


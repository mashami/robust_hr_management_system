import { Role } from '@prisma/client'

export interface SvgTypes {
  className?: string
  color?: string
  width?: number
  height?: number
  onClick?: () => void
}

export interface EventItemProps {
  startTime: string
  endTime: string
  name: string
  position: string
  phase: string
  active: boolean
}

export interface EventPeriod {
  period: string
  events: EventItemProps[]
}

export interface ExperienceItemProps {
  position: string
  periodTime: string
  workDescription: string[]
}

export interface CriterialType {
  title: string
  checked: boolean
}

export interface SignupType {
  name: string
  email: string
  password: string
  retypePassword: string
  role?: Role
}

// utils/types.ts - Add these interfaces to your existing types file

import {
  Status,
  InterviewStatus,
  JopType,
  JopLevel,
  PriorityStatus,
  Jobstatus,
} from '@prisma/client'

// Existing SignupType interface (for reference)
export interface SignupType {
  email: string
  password: string
  name: string
  retypePassword: string
}

// Candidate Types
export interface CreateCandidateType {
  name: string
  email: string
  phone?: string
  position: string
  experience: number
  skills?: string[]
  status?: Status
  resume?: string
  notes?: string
  supervisor?: string
  documentation?: string
  project?: string
  training?: string
  interviewStatus?: InterviewStatus | ''
  expectedSalary?: number
  currentSalary?: number
  noticePeriod?: string
  location?: string
  source?: string
}

export interface GetCandidatesParams {
  page?: number
  limit?: number
  status?: string
  search?: string
}

export interface CandidateResponse {
  id: string
  name: string
  email: string
  phone?: string
  position: string
  experience: number
  skills: string[]
  status: Status
  resume?: string
  notes?: string
  supervisor: string
  documentation: string
  project: string
  training?: string
  interviewStatus?: InterviewStatus
  expectedSalary?: number
  currentSalary?: number
  noticePeriod?: string
  location?: string
  source?: string
  onboardedOn?: Date
  createdAt: Date
  updatedAt: Date
}

// Job Types
export interface CreateJobType {
  title: string
  department: string
  location: string
  type?: JopType
  level?: JopLevel
  minSalary?: number
  maxSalary?: number
  description: string
  requirements: string[]
  skills: string[]
  benefits: string[]
  status?: Jobstatus
  applicationDeadline?: string
  openings?: number
  priority?: PriorityStatus
  hiringManager?: string
}

export interface GetJobsParams {
  page?: number
  limit?: number
  status?: string
  department?: string
  type?: string
  level?: string
  search?: string
}

export interface JobResponse {
  id: string
  title: string
  department: string
  location: string
  type: JopType
  level: JopLevel
  minSalary?: number
  maxSalary?: number
  description: string
  requirements: string[]
  skills: string[]
  benefits: string[]
  status: Jobstatus
  postedDate: Date
  applicationDeadline?: Date
  openings: number
  applicantsCount: number
  interviewed: number
  rejected: number
  feedbackPending: number
  offered: number
  priority: PriorityStatus
  hiringManager?: string
  createdAt: Date
  updatedAt: Date
}

// Event Types
export interface CreateEventType {
  startTime: string
  endTime: string
  name: string
  position: string
  phase: string
  active?: boolean
}

export interface GetEventsParams {
  page?: number
  limit?: number
  active?: string
  phase?: string
  search?: string
}

export interface EventResponse {
  id: string
  startTime: string
  endTime: string
  name: string
  position: string
  phase: string
  active?: boolean
}

// Common Response Types
export interface PaginationInfo {
  page: number
  limit: number
  total: number
  pages: number
}

export interface ApiResponse<T> {
  success: boolean
  error?: boolean
  message: string
  data?: T
  pagination?: PaginationInfo
}

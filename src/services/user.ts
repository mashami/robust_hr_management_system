import { HttpStatusCode } from '@/utils/enums'
import {
  ApiResponse,
  CreateCandidateType,
  CreateEventType,
  CreateJobType,
  EventResponse,
  GetEventsParams,
  JobResponse,
  SignupType,
} from '@/utils/types'
import { NextResponse } from 'next/server'

export const signUp = async ({
  email,
  password,
  name,
  retypePassword,
}: SignupType) => {
  const response = await fetch(`/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      password,
      retypePassword,
    }),
    cache: 'no-store',
  })

  const result = await response.json()

  return result
}

export const getUserInfo = async () => {
  const response = await fetch(`/api/getuserInfo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: true, message: 'Failed to fetch user' },
      { status: HttpStatusCode.BAD_REQUEST },
    )
  }

  const result = await response.json()
  return result
}

export const createCandidate = async ({
  name,
  email,
  phone,
  position,
  experience,
  status,
  supervisor,
  expectedSalary,
  currentSalary,
  noticePeriod,
}: CreateCandidateType) => {
  const response = await fetch(`/api/createCandidate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phone,
      position,
      experience,
      status,
      supervisor,
      expectedSalary,
      currentSalary,
      noticePeriod,
    }),
    cache: 'no-store',
  })

  const result = await response.json()
  return result
}

export const getAllCandidates = async () => {
  const response = await fetch(`/api/getAllCandidates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  const result = await response.json()

  return result
}

export const createJob = async (
  jobData: CreateJobType,
): Promise<ApiResponse<JobResponse>> => {
  const response = await fetch(`/api/createJob`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData),
    cache: 'no-store',
  })

  const result = await response.json()
  return result
}

export const getAllJobs = async () => {
  const response = await fetch(`/api/getAllJobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  const result = await response.json()

  return result
}

// EVENT SERVICES

export const createEvent = async (
  eventData: CreateEventType,
): Promise<ApiResponse<EventResponse>> => {
  const response = await fetch(`/api/createEvents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
    cache: 'no-store',
  })

  const result = await response.json()
  return result
}

export const getAllEvents = async (
  params?: GetEventsParams,
): Promise<ApiResponse<EventResponse[]>> => {
  // Build query string from parameters
  const queryParams = new URLSearchParams()

  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.limit) queryParams.append('limit', params.limit.toString())
  if (params?.active) queryParams.append('active', params.active)
  if (params?.phase) queryParams.append('phase', params.phase)
  if (params?.search) queryParams.append('search', params.search)

  const queryString = queryParams.toString()
  const url = `/api/getAllEvents${queryString ? `?${queryString}` : ''}`

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  if (!response.ok) {
    return {
      error: true,
      success: false,
      message: 'Failed to fetch events',
    }
  }

  const result = await response.json()
  return result
}

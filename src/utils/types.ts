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

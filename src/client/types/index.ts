export interface BRBStatus {
  away: boolean
  message?: string
}

export interface SocialAccount {
  service: string
  username: string
}

export type SocialAccounts = SocialAccount[]

export interface Notification {
  id?: string
  user: string
  topic: string
  scale?: number
  message?: string
}

export interface Cutout {
  top: number
  left: number
  bottom: number
  right: number
  height: number
  width: number
}

export type Timer = string

export enum ChatMessageTypeWithNotifications {
  ACTION = 'action',
  MESSAGE = 'message',
  NOTIFICATION = 'notification',
}

export type ChatNotificationMessage = Notification & {
  type: ChatMessageTypeWithNotifications.NOTIFICATION
}

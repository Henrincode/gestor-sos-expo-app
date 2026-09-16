export type Return<T> = Promise<
  | {
    success: true
    message: string
    data: T
    errors?: never
  }
  | {
    success: false
    message: string
    data?: never
    errors?: Record<string, string[]>
  }
>
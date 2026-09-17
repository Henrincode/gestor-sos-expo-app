export type Return<T> = Promise<
  | {
    data: T
    message?: never
    errors?: never
  }
  | {
    data?: never
    message: string
    errors?: Record<string, string[]>
  }
>
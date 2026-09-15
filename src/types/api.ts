export type Return<T> = Promise<
{
  ok: true
  message: string
  data: T
} | {
  ok: false
  message: string
}
>
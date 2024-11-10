export type Message = {
  content: string
  userType: "bank" | "customer"
  userName: string
  options?: string[]
}
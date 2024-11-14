import { type AccountModel } from '../models/account-model'

type AuthenticationInput = {
  email: string
  password: string
}

export interface Authentication {
  auth: (input: AuthenticationInput) => Promise<AccountModel>
}

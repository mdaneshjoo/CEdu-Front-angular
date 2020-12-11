export interface IUser {
  email?: string
  id: string
  isUni: boolean
  phoneNumber?: string
  userName: string
  lang: string
}


export interface IResponseData {
  meta: object;
  token: string;
  user: IUser;
}

import {IResponseData} from './User.interface';

export interface IAPIResponse {
  code: number;
  data: IResponseData;
  message: string,
  status: number
}

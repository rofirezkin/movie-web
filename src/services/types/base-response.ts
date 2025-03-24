import {AxiosError} from 'axios';

type Errors = {
  status: string;
  title: string;
  detail: string;
};
type Error = {
  errors: Errors[];
  meta: Meta;
};

export type AxiosBaseError = AxiosError<Error>;

export type ApiResponse<T> = {
  data: T;
  meta?: Meta;
};

type Meta = {
  success: boolean;
  response_code: string;
  message: string;
};
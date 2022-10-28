export interface Word {
  audioLink: string;
  day: number;
  english: string;
  korean: string;
}

export interface getWordResponse {
  has_more: boolean;
  next_cursor?: string;
  object: string;
  page: unknown;
  results: Word[];
  type: string;
}

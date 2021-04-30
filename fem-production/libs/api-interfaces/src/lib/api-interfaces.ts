export interface Message {
  message: string;
}

export interface BaseEntity {
  id?: string;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
}
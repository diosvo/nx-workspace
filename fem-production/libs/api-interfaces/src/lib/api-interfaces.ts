export interface Message {
  message: string;
}

export class Widget {

  constructor(public id: string | null, public title: string, public description: string) { }
}
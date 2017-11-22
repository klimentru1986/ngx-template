/** Модель респонса примера */
export class ResponseModel {
  type: string;
  value: ResponseValue[];
}

class ResponseValue {
  id: number;
  joke: string;
  categories: string[];
}

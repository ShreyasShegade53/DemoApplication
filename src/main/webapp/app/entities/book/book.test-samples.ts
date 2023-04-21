import { IBook, NewBook } from './book.model';

export const sampleWithRequiredData: IBook = {
  id: 37098,
};

export const sampleWithPartialData: IBook = {
  id: 92677,
  price: 26912,
};

export const sampleWithFullData: IBook = {
  id: 60289,
  title: 'synthesize',
  description: 'object-oriented Wooden Pizza',
  price: 81264,
};

export const sampleWithNewData: NewBook = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

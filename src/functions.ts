import { GreetProps } from './types';

export function greet(params: GreetProps) {
  // todo
  console.log('Hello User');
  return `${params.firstname} ${params.lastname} age ${params.age}`;
}

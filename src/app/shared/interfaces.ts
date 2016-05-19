export interface Author {
  id: number
  name: string
}

export interface Message {
  text: string
  author: Author
}
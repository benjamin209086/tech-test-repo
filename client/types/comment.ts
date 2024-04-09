export interface Comment {
    bcommentref: string,
    briefref: string,
    user: {
      userref: string,
      name: string,
      avatar: string
    },
    comment: string,
    submitted_on: string
}
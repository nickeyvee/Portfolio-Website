export class Post {
    likes: number = 0;
    constructor(
        public title :string,
        public subtitle: string,
        public content :string,
        public imgTitle?: string,
        public img?: any,
        public id?: string
    ) { }
}
export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public publishedYear?: number,
        public genre?: string
    ) {}
}
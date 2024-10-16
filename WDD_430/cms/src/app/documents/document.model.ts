export class Document {
    constructor(
        public id: string, //changed this from number to string
        public name: string,
        public description: string,
        public url: string,
        public children
    ) {}
}
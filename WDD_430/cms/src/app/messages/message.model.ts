export class Message {
    constructor(
        public id: string, //changed from number to string
        public subject: string,
        public msgText: string,
        public sender: string
    ) {}
}
export class Ticket {
    constructor(
        public id: number,
        public issueDate: Date,
        public category: string,
        public priority: string,
        public title: string,
        public description: string,
        public state: string
    ) {}
}
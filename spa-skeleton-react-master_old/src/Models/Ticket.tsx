export default class Ticket {
    constructor(
        public id: number,
        public issueDate: Date,
        public category: string,
        public title: string,
        public description: string,
        public priority: string,
        public state: string
    ) {
    }
}
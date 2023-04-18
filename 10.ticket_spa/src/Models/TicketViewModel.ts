export default class TicketView {
    constructor(
        public id: number,
        public issueDate: Date,
        public category: string,
        public title: string,
        public description: string,
        public priority: string,
        public state: string,
        public tenantCode: string,
        public notes: number
    ) {
    }
}
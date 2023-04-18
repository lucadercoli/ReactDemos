export default class Ticket {
    constructor(
        public id: number,
        public issueDate: Date,
        public categoryId: number,
        public title: string,
        public description: string,
        public priorityId: number,
        public stateId: number,
        public tenantCode: string
    ) {
    }
}
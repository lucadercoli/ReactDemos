export default interface Ticket {
  _id?: string;
  id: number;
  issueDate: Date;
  category: string;
  title: string;
  description: string;
  priority: string;
  state: string;
}

import Ticket from "../Models/Ticket";

export default class TicketDataService {
  apiURL: string =
    // "https://crudcrud.com/Dashboard/56ced3c2e13b455795de69ef2ff9fd6f/tickets";
    "https://crudcrud.com/api/62dec1e80fc34ddcba4634e46479e00a/tickets";
  basicHeaders: Headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });
  async getTickets() {
    var promise = await fetch(this.apiURL);
    const data = await promise.json();
    if (data.message == "Page Not Found") throw new Error(data.message);
    return data;
  }

  async addTicket(ticket: Ticket) {
    const promise = await fetch(this.apiURL, {
      method: "POST",
      headers: this.basicHeaders,
      body: JSON.stringify(ticket),
    });

    const data = await promise.json();
    if (data.message == "Page Not Found") throw new Error(data.message);
    return data;
  }

  async getTicket(id: any) {
    var promise = await fetch(`${this.apiURL}/${id}`, {
      method: "GET",
      headers: this.basicHeaders,
    });
    const data = await promise.json();
    return data;
  }
}

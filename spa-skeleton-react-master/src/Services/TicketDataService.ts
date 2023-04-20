import Ticket from "../Models/Ticket";

export default class TicketDataService {
  apiURL: string =
    // "https://crudcrud.com/Dashboard/56ced3c2e13b455795de69ef2ff9fd6f/tickets";
    "https://crudcrud.com/api/56ced3c2e13b455795de69ef2ff9fd6f/tickets";

  async getTickets() {
    var promise = await fetch(this.apiURL);
    const data = await promise.json();
    if (data.message == "Page Not Found") throw new Error(data.message);
    return data;
  }

  async addTicket(ticket: Ticket) {
    // const requestMetadata = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(ticket),
    // };

    // var promise = await fetch(this.apiURL, requestMetadata);

    let basicHeaders: Headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    const promise = await fetch(this.apiURL, {
      method: "POST",
      headers: basicHeaders,
      body: JSON.stringify(ticket),
    });

    const data = await promise.json();
    if (data.message == "Page Not Found") throw new Error(data.message);
    return data;
  }
}

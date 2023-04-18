import { Ticket } from "../models/Ticket";

export class TicketingDataService {
    //apiURL: string = "https://icticketing.azurewebsites.net/api/ticketanon";
    apiURL: string = "https://icticketing.azurewebsites.net/api/ticket";

    basicAuthAccount: string = 'guest1:Gu&st!';
    basicHeaders: Headers = new Headers({
        "Authorization": "Basic " + btoa(this.basicAuthAccount),
        "Accept": "application/json",
        "Content-Type": "application/json"
    });

    async getTickets(): Promise<Ticket[]> {
        try {
            const promise = await fetch(this.apiURL, {
                headers: this.basicHeaders
            });
            const data: Ticket[] = await promise.json();

            return data;

        } catch(err) {
            return [];
        }
    }

    async updateTicket(ticket: Ticket) {
        await fetch(this.apiURL + '/' + ticket.id, {
            method: 'PUT',
            headers: this.basicHeaders,
            body: JSON.stringify(ticket)
        });

        return;
    }
}
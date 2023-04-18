import TicketView from "../Models/TicketViewModel";
import Ticket from "../Models/TicketModel";

export default class TicketDataService {
    
    //apiURL: string = "https://localhost:44328/api/ticket";
    //apiURL: string = "https://icticketing.azurewebsites.net/api/ticketanon";
    apiURL: string = "https://icticketing.azurewebsites.net/api/ticket";
    basicAuthAccount: string = process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD
    basicHeaders: Headers = new Headers({
        "Authorization": "Basic " + btoa(this.basicAuthAccount),
        "Accept": "application/json",
        "Content-Type": "application/json",
        "TenantCode": String(process.env.REACT_APP_TENANT_NAME)
    });

    async getTickets() {
        try {
            const promise = await fetch(this.apiURL, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async getTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return {};
        }
    }

    async deleteTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, { 
                method: 'DELETE',
                headers: this.basicHeaders
            });

            return;
        } catch(err) {
            return;
        }
    }

    async createNewTicket(ticket: Ticket) {
        try {
            // force tenant code
            ticket.tenantCode = String(process.env.REACT_APP_TENANT_NAME);

            const promise = await fetch(this.apiURL, { 
                method: 'POST',
                headers: this.basicHeaders,
                body: JSON.stringify(ticket)
            });

            return;
        } catch(err) {
            return;
        }
    }

    async updateTicket(ticket: Ticket) {
        try {
            // force tenant code
            ticket.tenantCode = String(process.env.REACT_APP_TENANT_NAME);
            
            const promise = await fetch(this.apiURL + '/' + ticket.id, { 
                method: 'PUT',
                headers: this.basicHeaders,
                body: JSON.stringify(ticket)
            });

            return;
        } catch(err) {
            return;
        }
    }
}
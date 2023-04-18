export default class TicketDataService {
    //apiURL: string = "https://localhost:9999/api/tickets";
    //apiURL: string = "http://localhost:3000/testdata.json";
    //apiURL: string = "https://localhost:44328/api/ticketanon";
    //apiURL: string = "https://localhost:44328/api/ticket";
    apiURL: string = "https://icticketing.azurewebsites.net/api/ticket";

    async getTicketsAnon() {
        try {
            const promise = await fetch(this.apiURL);
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async getTickets() {
        try {
            var promise = await fetch(this.apiURL, {
                headers: new Headers({
                  "Authorization": "Basic " + btoa("guest1:Gu&st!")
                })
            });

            const data = await promise.json();
            return data;
        } catch(err) {
            return [];
        }
    }
}
export default class CountriesDataService {
  //apiUTicketDataServiceRL: string = "https://localhost:9999/api/tickets";
  //apiURL: string = "http://localhost:3000/testdata.json";
  //apiURL: string = "https://localhost:44328/api/ticketanon";
  //apiURL: string = "https://localhost:44328/api/ticket";
  apiURL: string = "https://restcountries.com/v3.1/all";

  async getCountries() {
    try {
      var promise = await fetch(this.apiURL);
      const data = await promise.json();
      return data;
    } catch (err) {
      return [];
    }
  }
}

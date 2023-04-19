export default class CountriesDataService {
  //apiURL: string = "https://restcountries.com/v3.1/all1111";
  apiURL: string = "https://restcountries.com/v3.1/all";

  async getCountries() {
    // try {
    var promise = await fetch(this.apiURL);
    const data = await promise.json();
    if (data.message == "Page Not Found") throw new Error(data.message);
    return data;
    // } catch (err) {
    //   return [];
    // }
  }
}

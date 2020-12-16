export class GatewayUrls{
  readonly LoginEndpoint: string = 'http://localhost:53595/api/userservice/auth/login';
  readonly RegisterEndpoint: string = 'http://localhost:53595/api/userservice/auth/register';
  readonly UploadExcelEndpoint: string = 'http://localhost:53595/api/excelservice/excel';
  readonly CompanyEndpoint1: string = 'http://localhost:53595/api/companyservice/company';
  readonly IpoEndpoint:string = 'http://localhost:53595/api/companyservice/ipo';
  readonly stockpriceEndpoint:string = 'http://localhost:53595/api/companyservice/stockprice';
  readonly SectorEndpoint: string = ''; 
}
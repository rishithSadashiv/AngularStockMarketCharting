export class GatewayUrls{
  readonly LoginEndpoint: string = 'http://localhost:53595/api/userservice/auth/login';
  readonly User_Endpoint: string = 'http://localhost:53595/api/userservice/auth';
  readonly RegisterEndpoint: string = 'http://localhost:53595/api/userservice/auth/register';
  readonly UploadExcelEndpoint: string = 'http://localhost:53595/api/excelservice/excel';
  readonly CompanyEndpoint1: string = 'http://localhost:53595/api/companyservice/company';
  readonly IpoEndpoint:string = 'http://localhost:53595/api/companyservice/ipo';
  readonly stockpriceEndpoint:string = 'http://localhost:53595/api/companyservice/stockprice';
  readonly StockExchange_SE_Endpoint:string = 'http://localhost:53595/api/stockexchangeservice/stockexchange';
  readonly StockExchange_C_Endpoing:string = 'http://localhost:53595/api/stockexchangeservice/company';
  readonly SectorEndpoint_S_Endpoint: string = 'http://localhost:53595/api/sectorservice/sectors'; 
  readonly SectorEndpoint_C_Endpoint:string = 'http://localhost:53595/api/sectorservice/company';
}
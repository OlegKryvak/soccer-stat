export interface Competition {
  area: number;
  code: string;
  currentSeason: string;
  emblemUrl: null | string;
  id: number;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: string;
}

export interface GetUsersResponse {
  competitions: Competition[];
  count: number;
  filters: any;
}
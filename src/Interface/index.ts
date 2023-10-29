export interface apiReponse{
    code: number;
    status: string;
    data: {
      results: CharacterData[]; 
    };
  }
 export interface CharacterData {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      items: [{ name: string }];
    };
    events: {
      items: [{ name: string }];
    };
    stories: {
      items: [{ name: string }];
    };
    series: {
      items: [{ name: string }];
    };
  }
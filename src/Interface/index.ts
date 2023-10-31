export interface apiReponse {
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

interface Thumbnail {
  path: string;
  extension: string;
}

export interface InfoProps {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: { items: [{ name: string }] };
  events: { items: [{ name: string }] };
  stories: { items: [{ name: string }] };
  series: { items: [{ name: string }] };
  closeModal: () => void;
}

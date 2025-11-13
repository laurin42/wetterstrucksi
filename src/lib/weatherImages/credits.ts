export interface Credit {
  author: string;
  description?: string;
  link?: string;
}

export const credits: Credit[] = [
  {
    author: "Carola68",
    description: "",
    link: "https://pixabay.com/de/photos/flughafen-d%c3%bcsseldorf-flugzeuge-4916726/"
  },
  {
    author: "OpenWeatherMap",
    description: "Wetterdaten API",
    link: "https://openweathermap.org/api"
  },
  {
    author: "Unsplash",
    description: "Hintergrundbilder",
    link: "https://unsplash.com"
  }
];

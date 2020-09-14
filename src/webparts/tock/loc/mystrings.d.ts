declare interface ITockWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  EndpointFieldLabel: string;
}

declare module 'TockWebPartStrings' {
  const strings: ITockWebPartStrings;
  export = strings;
}

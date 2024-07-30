export interface Relationship {
  character: string;
  opinion: string;
}

export interface FormattedMarkRelations {
  [character: string]: Relationship[];
}

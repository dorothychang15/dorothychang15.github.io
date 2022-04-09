export type StepConfig = {
    title: string;
    body: string;
    recs: string[];
    imgs?: Image[];
    centerRecs?: boolean;
}

export type Image = {
  src: string;
  caption?: string;
  height?: number;
  width?: number;
}
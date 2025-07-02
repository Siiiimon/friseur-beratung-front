export type RecommendationType = {
  id: string;
  name: string;
  description: string;
  tag: string;
};

export type ResultType = {
  id: string;
  tallies: Record<string, string>;
  recommendations: RecommendationType[];
};

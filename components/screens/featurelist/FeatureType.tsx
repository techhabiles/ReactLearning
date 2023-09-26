export type Feature = {
  id: number;
  name: string;
  subFeatures: SubFeature[];
};
export type SubFeature = {
  id: number;
  name: string;
};

export type FeatureData = Feature[];

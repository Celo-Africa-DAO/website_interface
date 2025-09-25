export interface Company {
  id: string;
  name: string;
  location: string;
  description: string;
  batch: string;
  tags: string[];
  projectLink?: string;
  founderContact?: string;
  logo?: string;
  cohort?: string;
}

export interface SelectedFilters {
  allCohorts: boolean;
  selectedCohorts: string[];
  allIndustries: boolean;
  selectedIndustries: string[];
  allCountries: boolean;
  selectedCountries: string[];
}

export type SortOption =
  | "Default"
  | "Name"
  | "Location"
  | "cohort"
  | "Vertical"
  | "Country";

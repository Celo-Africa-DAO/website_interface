import { Company, SelectedFilters, SortOption } from "./types";

// Get unique values for filters
export const getUniqueCohorts = (companies: Company[]): string[] => {
  const cohorts = companies.map((company) => company.batch);
  return Array.from(new Set(cohorts)).filter(Boolean).sort();
};

export const getUniqueIndustries = (companies: Company[]): string[] => {
  const industries = companies.flatMap((company) => company.tags);
  return Array.from(new Set(industries)).filter(Boolean).sort();
};

export const getUniqueCountries = (companies: Company[]): string[] => {
  const countries = companies.map((company) => company.location);
  return Array.from(new Set(countries)).filter(Boolean).sort();
};

// Filter companies based on search term and selected filters
export const filterCompanies = (
  companies: Company[],
  searchTerm: string,
  selectedFilters: SelectedFilters
): Company[] => {
  return companies.filter((company) => {
    // Search term filter
    const searchMatch =
      !searchTerm ||
      [
        company.name,
        company.location,
        company.description,
        company.batch,
        ...company.tags,
      ].some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()));

    // Cohort filter
    const cohortMatch =
      selectedFilters.allCohorts ||
      selectedFilters.selectedCohorts.includes(company.batch);

    // Industry filter
    const industryMatch =
      selectedFilters.allIndustries ||
      company.tags.some((tag) =>
        selectedFilters.selectedIndustries.includes(tag)
      );

    // Country filter
    const countryMatch =
      selectedFilters.allCountries ||
      selectedFilters.selectedCountries.includes(company.location);

    return searchMatch && cohortMatch && industryMatch && countryMatch;
  });
};

// Sort companies based on selected option
export const sortCompanies = (
  companies: Company[],
  sortBy: SortOption
): Company[] => {
  const sortedCompanies = [...companies];

  switch (sortBy) {
    case "Name":
      return sortedCompanies.sort((a, b) => a.name.localeCompare(b.name));
    case "Location":
      return sortedCompanies.sort((a, b) =>
        a.location.localeCompare(b.location)
      );
    case "cohort":
      return sortedCompanies.sort((a, b) => a.batch.localeCompare(b.batch));
    case "Vertical":
      return sortedCompanies.sort((a, b) => {
        const aTags = a.tags.join(", ");
        const bTags = b.tags.join(", ");
        return aTags.localeCompare(bTags);
      });
    case "Country":
      return sortedCompanies.sort((a, b) =>
        a.location.localeCompare(b.location)
      );
    default:
      return sortedCompanies;
  }
};

// Get count of active filters
export const getActiveFilterCount = (
  selectedFilters: SelectedFilters
): number => {
  let count = 0;
  if (
    !selectedFilters.allCohorts &&
    selectedFilters.selectedCohorts.length > 0
  ) {
    count += selectedFilters.selectedCohorts.length;
  }
  if (
    !selectedFilters.allIndustries &&
    selectedFilters.selectedIndustries.length > 0
  ) {
    count += selectedFilters.selectedIndustries.length;
  }
  if (
    !selectedFilters.allCountries &&
    selectedFilters.selectedCountries.length > 0
  ) {
    count += selectedFilters.selectedCountries.length;
  }
  return count;
};

// Get default filter state
export const getDefaultFilters = (): SelectedFilters => ({
  allCohorts: true,
  selectedCohorts: [],
  allIndustries: true,
  selectedIndustries: [],
  allCountries: true,
  selectedCountries: [],
});

// Transform API data to match Company interface
export const transformApiData = (data: any[]): Company[] => {
  return data.map((item, index) => ({
    id: item.id || `company-${index}`,
    name: item.name || item.Name || item.company || "",
    location:
      item.location || item.Location || item.country || item.Country || "",
    description: item.description || item.Description || item.about || "",
    batch: item.batch || item.Batch || item.cohort || item.Cohort || "",
    tags: Array.isArray(
      item.tags || item.Tags || item.vertical || item.Vertical
    )
      ? item.tags || item.Tags || item.vertical || item.Vertical
      : (item.tags || item.Tags || item.vertical || item.Vertical || "")
          .split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean),
    projectLink: item.projectLink || item["Project Link"] || item.website || "",
    founderContact:
      item.founderContact ||
      item["Founder Contact"] ||
      item.email ||
      item.contact ||
      "",
  }));
};

// Create Gmail URL for contacting founders
export const createGmailUrl = (email: string, companyName: string): string => {
  const subject = encodeURIComponent(`Inquiry about ${companyName}`);
  const body = encodeURIComponent(
    `Hi,\n\nI'm interested in learning more about ${companyName}.\n\nBest regards,`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
};

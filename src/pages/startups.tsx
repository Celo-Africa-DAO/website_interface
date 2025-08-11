import React, { useEffect, useState } from "react";
import Head from "next/head";
import { TailSpin } from "react-loader-spinner";
import { Company, SelectedFilters, SortOption } from "../types";
import {
  getActiveFilterCount,
  filterCompanies,
  sortCompanies,
  getUniqueCohorts,
  getUniqueIndustries,
  getUniqueCountries,
  transformApiData,
  getDefaultFilters,
  createGmailUrl,
} from "../utils";

const StartupDirectory = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("Default");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    getDefaultFilters()
  );

  // Use utility functions for filtering, sorting, and getting unique values
  const filteredCompanies = filterCompanies(
    companies,
    searchTerm,
    selectedFilters
  );
  const sortedCompanies = sortCompanies(filteredCompanies, sortBy);

  // Get unique values for filters
  const uniqueCohorts = getUniqueCohorts(companies);
  const uniqueIndustries = getUniqueIndustries(companies);
  const uniqueCountries = getUniqueCountries(companies);

  // Fetch data from Google Sheets API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/startups", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Transform the API data to match Company interface
        const transformedCompanies: Company[] = transformApiData(result.data);

        setCompanies(transformedCompanies);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load companies data");
        // Keep companies as empty array if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-Celo-AD-primary mt-20 flex items-center justify-center">
        <div className="text-center">
          <TailSpin
            height="80"
            width="80"
            color="#2563eb"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="mx-auto mb-4"
            visible={true}
          />
          <p className="text-gray-600">Loading companies...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-Celo-AD-primary mt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Error loading data
          </h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-20">
      <Head>
        <title>Startup Directory</title>
        <meta
          name="description"
          content="Incubator Startup Dictionary - Find and explore startups"
        />
      </Head>

      {/* Header Section */}
      <div className="bg-Celo-AD-primary py-6 sm:py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] text-black mb-2 sm:mb-3 md:mb-4 italic font-gt-alpina">
              Incubator Dictionary
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-md text-gray-600 mb-1 sm:mb-2 font-light font-Inter">
              Meet the startups from the Celo Africa DAO Incubator Program
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-md text-gray-600 font-light font-Inter">
              Here are the fast-growing startups solving problems in the African
              continent
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Search and Sort Bar with Filter Toggle */}
        <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          {/* Search Input - Full width on mobile */}
          <div className="w-full md:flex-1 md:max-w-md">
            <input
              type="text"
              placeholder="Search projects, verticals, countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-Inter"
            />
          </div>

          {/* Filter and Sort Controls - Stack on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3 w-full md:w-auto">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 py-2.5 sm:py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                getActiveFilterCount(selectedFilters) > 0
                  ? "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  getActiveFilterCount(selectedFilters) > 0
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              <span className="text-sm font-medium font-Inter">Filters</span>
              {getActiveFilterCount(selectedFilters) > 0 && (
                <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-full font-Inter">
                  {getActiveFilterCount(selectedFilters)}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <label className="text-sm font-medium text-gray-700 font-Inter text-center sm:text-left">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-Inter text-sm sm:text-base"
              >
                <option value="Default">Default</option>
                <option value="Name">Name</option>
                <option value="Location">Location</option>
                <option value="cohort">Cohort</option>
                <option value="Vertical">Vertical</option>
                <option value="Country">Country</option>
              </select>
            </div>
          </div>
        </div>

        {/* Collapsible Filters Section */}
        {showFilters && (
          <div className="mb-4 sm:mb-6 md:mb-8 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 sm:p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Batch Filter */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                      Cohort
                    </h3>
                    {!selectedFilters.allCohorts &&
                      selectedFilters.selectedCohorts.length > 0 && (
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-Inter">
                          {selectedFilters.selectedCohorts.length} selected
                        </span>
                      )}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <input
                          type="checkbox"
                          id="allCohorts"
                          checked={selectedFilters.allCohorts}
                          onChange={(e) =>
                            setSelectedFilters((prev) => ({
                              ...prev,
                              allCohorts: e.target.checked,
                              selectedCohorts: [],
                            }))
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        />
                        <label
                          htmlFor="allCohorts"
                          className="text-xs sm:text-sm font-medium text-gray-900 font-Inter"
                        >
                          All cohorts
                        </label>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {companies.length}
                      </span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 ml-4 sm:ml-6">
                      {uniqueCohorts.map((batch) => (
                        <div
                          key={batch}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <input
                              type="checkbox"
                              id={batch}
                              checked={selectedFilters.selectedCohorts.includes(
                                batch
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedCohorts: [
                                      ...prev.selectedCohorts,
                                      batch,
                                    ],
                                    allCohorts: false,
                                  }));
                                } else {
                                  const newSelectedCohorts =
                                    selectedFilters.selectedCohorts.filter(
                                      (b) => b !== batch
                                    );
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedCohorts: newSelectedCohorts,
                                    allCohorts: newSelectedCohorts.length === 0,
                                  }));
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                            />
                            <label
                              htmlFor={batch}
                              className="text-xs sm:text-sm text-gray-700"
                            >
                              {batch}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Industry Filter */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg ">
                      Vertical
                    </h3>
                    {!selectedFilters.allIndustries &&
                      selectedFilters.selectedIndustries.length > 0 && (
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-Inter">
                          {selectedFilters.selectedIndustries.length} selected
                        </span>
                      )}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <input
                          type="checkbox"
                          id="allIndustries"
                          checked={selectedFilters.allIndustries}
                          onChange={(e) =>
                            setSelectedFilters((prev) => ({
                              ...prev,
                              allIndustries: e.target.checked,
                              selectedIndustries: [],
                            }))
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        />
                        <label
                          htmlFor="allIndustries"
                          className="text-xs sm:text-sm font-medium text-gray-900"
                        >
                          All verticals
                        </label>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {companies.length}
                      </span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 ml-4 sm:ml-6">
                      {uniqueIndustries.map((industry) => (
                        <div
                          key={industry}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <input
                              type="checkbox"
                              id={industry}
                              checked={selectedFilters.selectedIndustries.includes(
                                industry
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedIndustries: [
                                      ...prev.selectedIndustries,
                                      industry,
                                    ],
                                    allIndustries: false,
                                  }));
                                } else {
                                  const newSelectedIndustries =
                                    selectedFilters.selectedIndustries.filter(
                                      (i) => i !== industry
                                    );
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedIndustries: newSelectedIndustries,
                                    allIndustries:
                                      newSelectedIndustries.length === 0,
                                  }));
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                            />
                            <label
                              htmlFor={industry}
                              className="text-xs sm:text-sm text-gray-700"
                            >
                              {industry}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Country Filter */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg font-gt-alpina-trial">
                      Country
                    </h3>
                    {!selectedFilters.allCountries &&
                      selectedFilters.selectedCountries.length > 0 && (
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-Inter">
                          {selectedFilters.selectedCountries.length} selected
                        </span>
                      )}
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <input
                          type="checkbox"
                          id="allCountries"
                          checked={selectedFilters.allCountries}
                          onChange={(e) =>
                            setSelectedFilters((prev) => ({
                              ...prev,
                              allCountries: e.target.checked,
                              selectedCountries: [],
                            }))
                          }
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        />
                        <label
                          htmlFor="allCountries"
                          className="text-xs sm:text-sm font-medium text-gray-900"
                        >
                          All countries
                        </label>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {companies.length}
                      </span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 ml-4 sm:ml-6">
                      {uniqueCountries.map((country) => (
                        <div
                          key={country}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <input
                              type="checkbox"
                              id={country}
                              checked={selectedFilters.selectedCountries.includes(
                                country
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedCountries: [
                                      ...prev.selectedCountries,
                                      country,
                                    ],
                                    allCountries: false,
                                  }));
                                } else {
                                  const newSelectedCountries =
                                    selectedFilters.selectedCountries.filter(
                                      (c) => c !== country
                                    );
                                  setSelectedFilters((prev) => ({
                                    ...prev,
                                    selectedCountries: newSelectedCountries,
                                    allCountries:
                                      newSelectedCountries.length === 0,
                                  }));
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                            />
                            <label
                              htmlFor={country}
                              className="text-xs sm:text-sm text-gray-700"
                            >
                              {country}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end pt-3 sm:pt-4 md:pt-6 border-t border-gray-300 space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilters(getDefaultFilters());
                  }}
                  className="px-3 sm:px-4 py-2.5 sm:py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-Inter"
                >
                  Clear All
                </button>

                <button
                  onClick={() => setShowFilters(false)}
                  className="px-3 sm:px-4 py-2.5 sm:py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-Inter"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Company Count */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-Inter">
            Showing {sortedCompanies.length} of {companies.length} companies
          </p>
        </div>

        {/* Company Listings */}
        <div className="space-y-0 shadow-lg border border-gray-300 rounded-lg bg-white">
          {sortedCompanies.length > 0 ? (
            sortedCompanies.map((company, index) => (
              <div
                key={company.id}
                className="border-b border-gray-300 py-3 sm:py-4 md:py-6 px-4"
              >
                <div className="flex flex-row items-center space-x-3 md:space-x-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {company.logo}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black mb-1">
                          {company.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-Inter">
                          {company.location}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-800 mb-2 sm:mb-3 font-Inter">
                          {company.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-start gap-1.5 sm:gap-2">
                          <span className="inline-flex items-center px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {company.batch}
                          </span>
                          {company.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-row sm:flex-col justify-start space-x-1.5 sm:space-x-0 sm:space-y-1.5 md:space-y-2">
                        {company.projectLink && (
                          <a
                            href={company.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 md:py-1 border border-blue-600 text-blue-600 text-xs font-medium rounded hover:bg-blue-50 transition-colors"
                          >
                            View Project
                          </a>
                        )}
                        {company.founderContact && (
                          <button
                            onClick={() => {
                              const email = company.founderContact!;
                              const gmailUrl = createGmailUrl(
                                email,
                                company.name
                              );
                              window.open(gmailUrl, "_blank");
                            }}
                            className="cursor-pointer inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 md:py-1 border border-gray-300 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                          >
                            Contact Founder
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 sm:py-8 md:py-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2">
                No companies found
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-3 sm:mb-4 font-Inter">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilters(getDefaultFilters());
                }}
                className="text-blue-600 hover:text-blue-700 font-medium font-Inter text-sm sm:text-base"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupDirectory;

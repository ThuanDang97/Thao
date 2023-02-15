import { BooksContext, IBookContext } from "../contexts/BooksContext";
import {
  CategoriesContext,
  ICategoriesContext,
} from "../contexts/CategoriesContext";
import { render, screen } from "@testing-library/react";
import { AppProvider } from "../contexts/AppContext";

import SubHeader, { SubHeaderProps } from "../pages/Home/components/SubHeader";
import { categories } from "../constants/mockData";

const mockProps: SubHeaderProps = {
  onToggleFilterModal: jest.fn(),
};

const CategoryContextValue: ICategoriesContext = {
  categories: categories,
  error: "",
  selectedIds: [],
  setSelectedCategory: jest.fn(),
  getCategoryById: jest.fn().mockReturnValueOnce(() => categories),
  handleRemoveSelectedCategory: jest.fn(),
};

const BookContextValue: IBookContext = {
  isGridView: true,
  isSortNameStatus: true,
  isSortYearStatus: false,
  handleChangeGridView: jest.fn(),
  handleSortByAlphabet: jest.fn(),
  handleSortByReleaseYear: jest.fn(),
  books: [],
  error: "",
  isLoading: false,
  searchBooks: jest.fn(),
  getBookById: jest.fn(),
  handleFilterByCategories: jest.fn(),
};

describe("Avatar render", () => {
  test("Ensure image avatar render correctly", () => {
    render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <BooksContext.Provider value={BookContextValue}>
          <SubHeader {...mockProps} />
        </BooksContext.Provider>
      </CategoriesContext.Provider>
    );

    const complementary = screen.getByTestId("Adventure");

    expect(complementary).toHaveTextContent("Adventure");
  });
});


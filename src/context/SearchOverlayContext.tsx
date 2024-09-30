import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ChildrenProp } from "../types/types";
type StateValue = {
  isShow: boolean;
  searchText?: string;
};
export const SearchOverlayContext = createContext<{
  searchOverlay: StateValue;
  setSearchOverlay: Dispatch<SetStateAction<StateValue>>;
}>({
  searchOverlay: {
    isShow: false,
    searchText: undefined,
  },
  setSearchOverlay: () => {},
});

const SearchOverlayContextProvider = ({ children }: ChildrenProp) => {
  const [searchOverlay, setSearchOverlay] = useState<StateValue>({
    isShow: false,
    searchText: undefined,
  });
  return (
    <SearchOverlayContext.Provider value={{ searchOverlay, setSearchOverlay }}>
      {children}
    </SearchOverlayContext.Provider>
  );
};

export default SearchOverlayContextProvider;

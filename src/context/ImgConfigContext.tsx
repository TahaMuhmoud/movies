import { createContext } from "react";
import { AnyObject, ChildrenProp } from "../types/types";
import { useConfigs } from "../hooks/useConfigs";
import { ImgSizes } from "../services/imagesSize";

import LoadingPage from "../pages/LoadingPage";

export const ImgConfigContext = createContext<ImgSizes | AnyObject>({});

function ImgConfigProvider({ children }: ChildrenProp) {
  const { data, isLoading } = useConfigs();
  // const deviceSize = useWindowResize();
  if (!data || isLoading) return <LoadingPage />;
  return (
    <ImgConfigContext.Provider value={{ ...data }}>
      {children}
    </ImgConfigContext.Provider>
  );
}

export default ImgConfigProvider;

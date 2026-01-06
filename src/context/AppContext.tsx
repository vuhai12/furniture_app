import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  user: string | null;
  keyword: string | undefined;
  setKeyword: (keyword: string | undefined) => void;
  setUser: (user: string | null) => void;
  isShowPopup: boolean;
  isShowPopupRegister: boolean;
  setIsShowPopup: (isShowPopup: boolean) => void;
  setIsShowPopupRegister: (isShowPopupRegister: boolean) => void;
  listCategories: {
    id: string;
    name: string;
    description: string;
    slug: string;
  }[];
  setListCategories: (
    listCategories: {
      id: string;
      name: string;
      description: string;
      slug: string;
    }[]
  ) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string | undefined>("");
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowPopupRegister, setIsShowPopupRegister] = useState(false);
  const [listCategories, setListCategories] = useState<
    { id: string; name: string; description: string; slug: string }[]
  >([]);

  return (
    <AppContext.Provider
      value={{
        setKeyword,
        keyword,
        user,
        setUser,
        isShowPopup,
        setIsShowPopup,
        isShowPopupRegister,
        setIsShowPopupRegister,
        setListCategories,
        listCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

export default AppContext;

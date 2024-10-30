import { Dayjs } from "dayjs";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Định nghĩa kiểu dữ liệu cho context
interface AuthContextProps {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Cung cấp giá trị mặc định (không nên sử dụng cách này nếu bạn cần đảm bảo rằng phải có Provider)
const defaultValue: AuthContextProps = {
  logged: false,
  setLogged: () => {},
};

// Tạo Context
const AuthContext =
  createContext<AuthContextProps>(defaultValue);

// Định nghĩa kiểu cho props của AppProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Tạo Provider cho Context
export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [logged, setLogged] = useState(true);
  const value = {
    logged,
    setLogged,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Tạo custom hook để sử dụng AppContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AppProvider");
  }
  return context;
};

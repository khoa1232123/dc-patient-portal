import { Dayjs } from "dayjs";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Định nghĩa kiểu dữ liệu cho context
interface AppointmentContextProps {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Cung cấp giá trị mặc định (không nên sử dụng cách này nếu bạn cần đảm bảo rằng phải có Provider)
const defaultValue: AppointmentContextProps = {
  logged: false,
  setLogged: () => {},
};

// Tạo Context
export const AppointmentContext =
  createContext<AppointmentContextProps>(defaultValue);

// Định nghĩa kiểu cho props của AppProvider
interface AppProviderProps {
  children: ReactNode;
}

// Tạo Provider cho Context
export const AppointmentProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
  const [logged, setLogged] = useState(true);
  const value = {
    logged,
    setLogged,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Tạo custom hook để sử dụng AppContext
export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};


import { TUser } from "@/redux/features/auth/authSlice";
import { getCurrentUser } from "@/utils/getCurrentUser";
import {
  createContext,

  useContext,
  useEffect,
  useState,
} from "react";



const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;

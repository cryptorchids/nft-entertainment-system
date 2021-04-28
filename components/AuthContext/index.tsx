import { JsonRpcProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import React, {
  Context,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { RPC_URL } from "react-native-dotenv";
import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
} from "react-native-secure-storage";

const key = "walletPrivateKey";

const config = {
  accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
  authenticationPrompt: "auth with yourself",
  service: "example",
  authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
};

type AuthContextObject = Context<{
  walletAddress: string;
  setCredentials: (privateKey: string, address: string) => void;
  signer: Wallet;
}>;

const AuthContext: AuthContextObject = React.createContext({
  walletAddress: null,
  setCredentials: null,
  signer: null,
});

type Props = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: Props): ReactElement => {
  const [walletAddress, setWalletAddress] = useState<string>(null);
  const [signer, setSigner] = useState<Wallet>(null);

  const setCredentials = async (
    privateKey: string,
    address: string
  ): Promise<void> => {
    await SecureStorage.setItem(key, privateKey, config);
    setWalletAddress(address);
  };

  useEffect(() => {
    const checkExisting = async () => {
      const privateKey = await SecureStorage.getItem(key, config);

      if (privateKey) {
        const jsonProvider = new JsonRpcProvider(RPC_URL, 4);
        await jsonProvider.ready;
        const wallet = new Wallet(privateKey, jsonProvider);
        setWalletAddress(wallet.address);
        setSigner(wallet);
      }
    };

    checkExisting();
  }, []);

  return (
    <AuthContext.Provider value={{ walletAddress, setCredentials, signer }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export default AuthContext;

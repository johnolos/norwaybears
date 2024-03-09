import { PropsWithChildren, createContext, useContext } from "react";
import type { PicoSanity } from "picosanity";

const SanityClientContext = createContext<PicoSanity | undefined>(undefined);

export const SanityClientProvider = ({
  client,
  children,
}: PropsWithChildren<{ client: PicoSanity }>) => {
  return (
    <SanityClientContext.Provider value={client}>
      {children}
    </SanityClientContext.Provider>
  );
};

export const useSanityClient = () => {
  const client = useContext(SanityClientContext);
  if (!client) {
    throw new Error(
      "useSanityClient must be used within a SanityClientProvider",
    );
  }
  return client;
};

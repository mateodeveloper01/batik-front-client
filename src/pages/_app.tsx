import "~/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./../redux/store";
import Layout from "~/components/layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "~/global/authProviders";
import { ChakraProvider } from "@chakra-ui/react";
import LayoutNotNav from "~/components/layouts/LayoutNotNav";

const MyApp: any = ({ Component, pageProps }: any) => {
  const queryClient = new QueryClient();
  const isLayoutEnabled = Component.layout !== false; 
  return (
    <Provider store={store}>
      <AuthProvider>
        <ChakraProvider>
          <PersistGate loading="loading" persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <>
                {isLayoutEnabled && (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                )}
                {!isLayoutEnabled && (
                  <LayoutNotNav>
                    <Component {...pageProps} />
                  </LayoutNotNav>
                )}
              </>
            </QueryClientProvider>
          </PersistGate>
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  );
};

export default MyApp;

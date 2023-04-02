import Layout from "../components/Common/Layout";
import { QueryClientProvider, QueryClient } from "react-query";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-white dark:bg-bgGray relative text-black dark:text-white'>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;

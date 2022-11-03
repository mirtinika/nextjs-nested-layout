import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import { StoreProvider } from '../store';

import SiteLayout from '../layouts/SiteLayout';

type Page<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
    Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
    const getLayout =
        Component.getLayout ??
        ((page: ReactNode) => (
            <StoreProvider>
                <SiteLayout>{page}</SiteLayout>
            </StoreProvider>
        ));
    return getLayout(<Component {...pageProps} />);
};
export default App;

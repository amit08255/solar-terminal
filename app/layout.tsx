'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Providers from './providers';
import '../global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <Providers>{children}</Providers>
                </QueryClientProvider>
            </body>
        </html>
    );
}

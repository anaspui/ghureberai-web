import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import Layout from './Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

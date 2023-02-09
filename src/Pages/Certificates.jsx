import React from 'react';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer';

import CertificateGenerator from '../components/certificates/CertificateGenerator';

export const Certificates = () => {
  return (
    <>
      <Header />
      <section className="mt-10">
        <CertificateGenerator/>
      </section>
      <Footer />
    </>
  )
}

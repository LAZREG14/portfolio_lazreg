import React from 'react';

const PDFPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Utilisation de l'iframe pour afficher le PDF avec styles CSS */}
      <iframe src="/CV_DS_LAZREG_.pdf" width="100%" height="77%" style={{ border: 'none' }}></iframe>
    </div>
  );
};

export default PDFPage;

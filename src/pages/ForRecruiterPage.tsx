import React from 'react';
import TechnologiesPage from './micro-pages/TechnologiesPage';
import LanguagePage from './micro-pages/LanguagePage';
import ExperiencePage from './micro-pages/ExperiencePage';

const ForBusinessPage: React.FC = () => {
  return (
    <>
      <TechnologiesPage/>
      <LanguagePage/>
      <ExperiencePage/>
    </>
  );
}

export default ForBusinessPage;
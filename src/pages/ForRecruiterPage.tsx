import React from 'react';
import TechnologiesPage from './micro-pages/TechnologiesPage';
import LanguagePage from './micro-pages/LanguagePage';
import ExperiencePage from './micro-pages/ExperiencePage';
import PageSection from '../components/PageSection';
import React from 'react';

const ForRecruiterPage: React.FC = () => {
  return (
    <>
      <PageSection><TechnologiesPage/></PageSection>
      <PageSection><LanguagePage/></PageSection>
      <PageSection><ExperiencePage/></PageSection>
    </>
  );
}

export default ForRecruiterPage;
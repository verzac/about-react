import React from 'react';
import { Typography, Box } from '@material-ui/core';
import ImageContainer from '../../components/ImageContainer';
import TypescriptIcon from '../../assets/ts.png';
import JavascriptIcon from '../../assets/js.png';
import PythonIcon from '../../assets/python.png';
import JavaIcon from '../../assets/java-brands.svg';

const LanguagePage: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Languages</Typography>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
        <ImageContainer imgSrc={TypescriptIcon} imgAlt="TypeScript" imgCaption="TypeScript" imgType="icon"/>
        <ImageContainer imgSrc={JavascriptIcon} imgAlt="JavaScript" imgCaption="JavaScript" imgType="icon"/>
        <ImageContainer imgSrc={PythonIcon} imgAlt="Python 3.x" imgCaption="Python 3.x" imgType="icon"/>
        <ImageContainer imgSrc={JavaIcon} imgAlt="Java 8+" imgCaption="Java 8+" imgType="icon"/>
      </Box>
    </>
  );
};

export default LanguagePage;
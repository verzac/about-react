export const aboutApiBaseUrl = process.env.REACT_APP_ABOUT_API_BASE_URL;
export const reactAppVersion = process.env.REACT_APP_VERSION;
export const reactAppName = process.env.REACT_APP_NAME;
export const shouldMock: boolean = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
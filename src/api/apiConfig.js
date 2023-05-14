const apiConfig = {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    // Deep link
    firebaseDynamicLinkUrl: process.env.REACT_APP_FIREBASE_DEEP_LINK_URL,
    androidPackageName: process.env.REACT_APP_ANDROID_PACKAGE_NAME,
    deepLinkUrl: process.env.REACT_APP_DEEP_LINK_URL,
    deepLinkDomainUri:
        process.env.REACT_APP_FIREBASE_DEEP_LINK_DOMAIN_URI_PREFIX,
};

export default apiConfig;

import Cookies from 'js-cookie';
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


const onInitialClientRender = () => {
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
};

const onRouteUpdate = () => {
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
    }
    window.analytics && window.analytics.page({
        'campaign': Cookies.get('c') || 'default'
    });
};

export {
    onInitialClientRender,
    onRouteUpdate,
};
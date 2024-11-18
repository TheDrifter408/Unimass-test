import { useEffect } from "react";

const menuPages = [
    "/privacy-policy", "/universities", "/schools", "/ielts-pte",
    "/courses", "/migrate-to-australia", "/search"
];

export const usePageClass = (pathName) => {
    useEffect(() => {
        const isMenuPage = menuPages.includes(pathName) ||
            pathName.startsWith('/universities/') ||
            pathName.startsWith('/schools/') ||
            pathName.startsWith('/courses/') ||
            pathName.startsWith('/news-events/');

        if (isMenuPage) {
            document.body.classList.add("menu-v2");
        } else {
            document.body.classList.remove("menu-v2");
        }
    }, [pathName]);
};

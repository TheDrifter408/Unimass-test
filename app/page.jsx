import AboutUs from "@/components/AboutUs";
import MyInnerBanner from "@/components/MyInnerBanner";
import Services from "@/components/Services";

export const metadata = {
    title: {
        default: "Dcastalia",
    },
    description: "Dcastalia is a software development company in Bangladesh that started its journey with the aim to deliver innovative result-driven software solutions.",
};

export default function Home() {

    return (
        <>
            <MyInnerBanner />
            <Services />
            <AboutUs />

        </>
    );
};





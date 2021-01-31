import Custom_Slider from './../components/static/slider.js'
import JobModule from "./../components/static/job_module.js";
import AboutCompany from './../components/static/aboutCompany'
import Feedback from "./../components/static/feedback";



export default function MainPage() {
    return (
        <>
            <Custom_Slider />
            <JobModule />
            <AboutCompany />
            <Feedback />
        </>
    );
}


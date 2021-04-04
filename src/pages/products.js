import JobModule from "./../components/static/job_module.js";
import AboutCompany from './../components/static/aboutCompany'
import Feedback from "./../components/static/feedback";
import ProductStart from './../components/static/prduct_start';
import ProductBlock from "../components/static/product_about.js";
import img from "../img/product/bot_view.jpg";
import setup from "../data/products_setup.js";
const text = 'Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct Text only for test that this module work correct'

export default function MainPage() {
    return (
        <>
            {console.log(setup)}
            <ProductStart />
            {setup.map(elem =>
                <ProductBlock title={elem.title} left={elem.position} img={elem.image} text={elem.text} />

            )}
        </>
    );
}


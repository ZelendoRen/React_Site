import StartCrew from "../components/static/startCrew"
import Form from "../components/dynamic/form"
import ModelAdv from "../components/static/adv_model"
import ModelDetails from "../components/static/model_details"
import { model as model } from "../data/startData"
export default function Model() {
    return (
        <>
            <StartCrew data={model} />
            <ModelAdv />
            <ModelDetails />
            <Form />
        </>
    )
}


import StartCrew from "../components/static/startCrew"
import Form from "../components/dynamic/form"
import AdvantagesT from "../components/static/advantagesTranslator"
import QuestionAnswer from "../components/static/qestionAnswer"
import { translator as translator } from "../data/startData"
export default function Translator() {
    return (
        <>
            <StartCrew data={translator} />
            <AdvantagesT />
            <QuestionAnswer />
            <Form />
        </>
    )
}


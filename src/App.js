import "./styling/global.scss";
import Form from "./Pages/RecruitmentForm";
import { FormDataProvider } from "./Pages/RecruitmentForm/context/formContext";
import Layout from "./layout";

function App() {
    return (
        <Layout>
            <FormDataProvider>
                <Form />
            </FormDataProvider>
        </Layout>
    );
}

export default App;

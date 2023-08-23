import { createBrowserRouter } from "react-router-dom";
import Demo from "../components/Demo";
import Form from "../components/Form";
import App from "../App";
import Response from "../components/Response";

const router = createBrowserRouter([{

    path: "/",
    element: <App></App>,
    children: [
        {
            path: "/",
            element: <Form></Form>
        },
        {
            path: "/demo",
            element: <Demo></Demo>
        },
        {
            path: "/response",
            element:<Response></Response>
        }
    ]
}]);

export default router;
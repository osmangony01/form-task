import { createBrowserRouter } from "react-router-dom";
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
            path: "/response",
            element:<Response></Response>
        }
    ]
}]);

export default router;
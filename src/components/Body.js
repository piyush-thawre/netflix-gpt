import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";

const Body =()=>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        }


    ])
    return(
        <div>
            <RouterProvider router={appRouter}>
                    

            </RouterProvider>

        </div>
    );
}

export default Body;

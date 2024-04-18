import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideosContainer from "./components/VideosContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "", element: <VideosContainer /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

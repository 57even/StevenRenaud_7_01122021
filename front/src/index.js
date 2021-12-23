import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Thread from "./routes/Thread";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="thread">
          <Route path=":threadId" element={<Thread />} />
        </Route>
      <Route path="login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Profile" element={<Profile />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

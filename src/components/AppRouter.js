import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import User from "./User";
import Balance from "./Balance";
import RouterLayout from "./RouterLayout";
import NotFound from "./NotFound";
import Register from "./Register";

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<RouterLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="user" element={<User />} />
            <Route path="balance" element={<Balance />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;
  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import PostPageHome from "./views/PostPageHome";
import SignUpPage from "./views/SignUpPage";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPageHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add" element={<PostPageAdd />}/>
        <Route path="/update/:id" element={<PostPageUpdate/>}/>
        <Route path="/post/:id" element={<PostPageDetails/>}/> 
        <Route path="/error" element={<ErrorPage/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;



import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Route } from "react-router-dom";

let router = null;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (isMobile) {
        router = await import("./Components/Mobile/routers/routes");

        setIsLoading(false);
      } else {
        router = await import("./Components/Desktop/routers/routes");
        setIsLoading(false);
      }
    })();
  }, []);

  return !isLoading ? (
    <>
      <Router>
        {isMobile ? (
          <div>
            <Route path="/" component={router?.default} />
          </div>
        ) : (
          <div>
            <Route path="/" component={router?.default} />
          </div>
        )}
      </Router>
    </>
  ) : (
    <></>
  );
}

export default App;

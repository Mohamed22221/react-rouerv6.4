import React, { Suspense, lazy } from "react";
const OtherLazy = lazy(() => import("../components/lazy"));

const LazyLoading = () => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
      <div>
        <h2>moooo</h2>
    g    <OtherLazy />
        componet lazy
      </div>
    </Suspense>
  );
};

export default LazyLoading;

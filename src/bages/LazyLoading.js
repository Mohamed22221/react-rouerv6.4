import React, { Suspense, lazy } from "react";
const OtherLazy = lazy(() => import("../components/lazy"));

const LazyLoading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <OtherLazy />
      </div>
    </Suspense>
  );
};

export default LazyLoading;

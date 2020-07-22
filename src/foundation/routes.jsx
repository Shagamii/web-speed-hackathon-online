import React, { lazy, Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Entrance = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/entrance'),
);
const BlogHome = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/blog_home'),
);
const Entry = lazy(() => import(/* webpackPrefetch: true */ '../pages/entry'));
const NotFound = lazy(() =>
  import(/* webpackPrefetch: true */ '../pages/not_found'),
);

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Entrance} />
        <Route exact path="/:blogId" component={BlogHome} />
        <Route exact path="/:blogId/entry/:entryId" component={Entry} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}

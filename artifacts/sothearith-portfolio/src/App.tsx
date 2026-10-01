import React from 'react';
import { Route, Switch } from 'wouter';
import Home from '@/pages/home';
import ProjectDetailPage from '@/pages/project-detail';
import NotFound from '@/pages/not-found';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work/:slug" component={ProjectDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

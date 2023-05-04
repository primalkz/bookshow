import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SummaryScreen from './SummaryScreen';
import BookingScreen from './BookingScreen';

const App = () => {
return (
<Router>
<div>
<Switch>
<Route exact path="/" component={HomeScreen} />
<Route exact path="/summary/:id" component={SummaryScreen} />
<Route exact path="/booking" component={BookingScreen} />
</Switch>
</div>
</Router>
);
};

export default App;


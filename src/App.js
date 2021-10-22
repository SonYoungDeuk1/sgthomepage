import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';
import History from './Pages/About/History';
import BusinessPartner from './Pages/About/BusinessPartner';
import Vision from './Pages/About/Vision';
import WayToCome from './Pages/About/WayToCome';
import OrganizeChart from './Pages/About/OrganizeChart';
import Manufacture from './Pages/BusinessDomain/Manufacture';
import ProcessingBusiness from './Pages/BusinessDomain/ProcessingBusiness';
import SecondaryBattery from './Pages/BusinessDomain/SecondaryBattery';
import Measure from './Pages/FacilityStatus/Measure';
import Processing from './Pages/FacilityStatus/Processing';
import Production from './Pages/FacilityStatus/Production';
import Introduce from './Pages/Technology/Introduce';
import Patent from './Pages/Technology/Patent';
import Recruitment from './Pages/CustomerSupport/Recruitment';
import QuoteContact from './Pages/CustomerSupport/QuoteContact';
import News from './Pages/PRCenter/News';
import DelNews from './Pages/PRCenter/DelNews';
import NewsInfo from './Pages/PRCenter/NewsInfo';
import AddNews from './Pages/PRCenter/AddNews';
import UpdateNews from './Pages/PRCenter/UpdateNews';
import Catalogue from './Pages/PRCenter/Catalogue';
// import Fee2 from './pages/Fee/Fee2';
import ScrollTop from './components/PageTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop/>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet} />
        <Route path="/vision" component={Vision} />
        <Route path="/history" component={History} />
        <Route path="/business-partner" component={BusinessPartner} />
        <Route path="/way-to-come" component={WayToCome} />
        <Route path="/organize-chart" component={OrganizeChart} />
        <Route path="/manufacture" component={Manufacture} />
        <Route path="/processing-business" component={ProcessingBusiness} />
        <Route path="/secondary-battery" component={SecondaryBattery} />
        <Route path="/measure" component={Measure} />
        <Route path="/processing" component={Processing} />
        <Route path="/production" component={Production} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/patent" component={Patent} />
        <Route path="/recruitment" component={Recruitment}  />
        <Route path="/quote-contact" component={QuoteContact}  />
        <Route path="/news" component={News} />
        <Route path="/news-delete" component={DelNews} />
        <Route path="/news-add" component={AddNews} />
        <Route path="/news-update" component={UpdateNews} />
        <Route path="/news-info" component={NewsInfo} />
        <Route path="/catalogue" component={Catalogue} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

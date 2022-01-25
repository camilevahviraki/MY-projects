import FormValidate from './FormValidate.js'
import './App.css';
import Formulaire2 from './Formulaire2.js';
import {Route} from 'react-router-dom';
import SetNavBar from './SetNavBar.js';
import LoginPage from './LoginPage.js';
import SpeechRecording from './SpeechRecording.js'
import ScrollOut from './ScrollOut.js';
import DesigneResponsive from './DesigneResponsive.js';
import SendFilesDisplay from './SendFilesDisplay.js';
import InfinteScroller from  './InfiniteScroller.js';
import Articles from './InfiniteScroller2';
import ImgCompressor from './ImgCompressor.js';
import NotificationProvider from './PushNotification.js';
function App() {
  return (
    <div className="App">
      
      <h1>the vitron beginning</h1>
      <SetNavBar/>
      <Route exact path="/form1" component={FormValidate}/>
      <Route exact path="/register" component={Formulaire2}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/record" component={SpeechRecording}/>
      <Route exact path="/scroll" component={ScrollOut}/>
       <Route exact path="/media-query" component={DesigneResponsive}/>
       <Route exact path="/SendFiles" component={SendFilesDisplay}/>
       <Route exact path="/scrollingBdd" component={InfinteScroller}/>
       <Route exact path="/scrollingBdd2" component={Articles}/>
       <Route excat path="/imgCompressor" component={ImgCompressor}/>
       <Route excat path="/PushNotification" component={NotificationProvider}/>
     
    
    </div>
  );
}

export default App;

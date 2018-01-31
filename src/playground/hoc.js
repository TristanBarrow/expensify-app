import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Hello</h1>
    <p>This is information. {props.info}</p>
  </div>
);

const withAdminWarning = (WrapedComponet) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>WARNING!!</p>}
      <WrapedComponet {...props}/>
    </div>
  );
};
  
const requireAuthentication = (WrapedComponet) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrapedComponet {...props} /> : <p> You are not Authenticated.</p>}
    </div>
  ); 
};

const InfoPlus = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is my info" />, document.getElementById("app"));
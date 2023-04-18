import React, { useState } from "react";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { IUserDetailsRouteProps } from "./UserDetails";

const UserDetailsFunct: React.FC = (props) => {
    const params = useParams<IUserDetailsRouteProps>();
    const match = useRouteMatch();

    const [ redirect, setRedirect ] = useState(false);

    if(redirect)
        return(<Redirect to="/userlist" />);

    const userId = params.id;
    const empCode = params.pluto;
    const matchingUrl = match.url;
    
    return(<React.Fragment>
        <h1>(F) User #{userId} Details</h1>
        <h2>Matching url: {matchingUrl}</h2>
        <h2>EmpCode: {empCode}</h2>
        <button className="btn btn-danger" 
            onClick={() => setRedirect(true)}>Back</button>
    </React.Fragment>);
};

export default UserDetailsFunct;
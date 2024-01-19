import React from "react";
import './Log.css';

function Sign() {
	return (
		<div className="LOGIN">
			<div className="LOG">
        <form>
            <h4>Sign Up</h4>
            

            
            <br/>
            <input type="email"  placeholder="email"/>
            <br/> <br/>
            
            <br/>
            <input type="password"  placeholder="password" />
            <br/> <br/>
        <a href="/Home">
            <button type="button" class="btn btn-success" >Submit</button>
            </a>
        </form>
    </div>
		</div>
	);
}

export default Sign;

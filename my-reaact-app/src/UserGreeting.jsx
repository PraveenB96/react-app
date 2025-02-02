import PropTypes from 'prop-types';

function UserGreetings(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>;
    const loginPrompt = <h2 className="welcome-message">Welcome {props.userName}</h2>;
    return (
        <>
            {props.isLoggedIn ? welcomeMessage : 
                                loginPrompt}
        </>
    )
}

UserGreetings.PropTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

UserGreetings.defaultProps = {  
    isLoggedIn: false,
    userName: "Guest Prompt"
}

export default UserGreetings;
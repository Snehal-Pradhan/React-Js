import propTypes from "prop-types"
import { UserUsername } from "./UserUsername";
import PropTypes from "prop-types";

export default function UserProfile(){
    return <div>
        <UserUsername username="bob"/>
        <div>
            <span>Email: <span>snehalpradhan23@gmail.com</span></span>
        </div>
        <section>
            <span>Favourite Foods:</span>
            <br />
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Pasta</li>
            </ul>
        </section>
    </div>
}

UserProfile.propTypes={
    username: PropTypes.string.isRequired
    
}
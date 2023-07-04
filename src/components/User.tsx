import { UserProps } from "../types/user";

import {MdLocationPin} from 'react-icons/md';
import classes from './User.module.css';

import {Link} from 'react-router-dom';

const User = ({
    login, 
    avatar_url, 
    followers, 
    following, 
    location,
}:UserProps) => {
  return <div className={classes.user}>
    <div className={classes.user_image_wrapper}>
        <img src={avatar_url} alt={login}/>
    </div>
    <h2>{login}</h2>
    {location && (
    <p className={classes.location}>
       <MdLocationPin/>
       <span>{location}</span>
    </p>
    )}
    <div className={classes.stats}>
        <div>
            <p>Seguidores:</p>
            <p className={classes.number}>{followers}</p>
        </div>
        <div>
            <p>Seguindo:</p>
            <p className={classes.number}>{following}</p>
        </div>
    </div>
    <Link to={`/repositories/${login}`}>Access repositories</Link>
  </div>
  
}

export default User
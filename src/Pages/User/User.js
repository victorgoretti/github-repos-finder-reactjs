import React from 'react';

import { useParams } from 'react-router-dom';
import UserInformations from '../../Components/UserInformations';

const User = () => {
    const { userName } = useParams();
    
    return (
        <section>
            <UserInformations userName={userName}/>
        </section>
    );
};

export default User;

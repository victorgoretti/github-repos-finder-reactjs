import React, { useEffect, useState } from 'react';
import UserInformationsCard from '../UserInformationsCard';
import RepositoriesAccordion from '../RepositoriesAccordion';


const UserInformations = ({ username }) => {
    
    return (
        <>
        <UserInformationsCard />
        <RepositoriesAccordion />
        </>
    );
};

export default UserInformations;

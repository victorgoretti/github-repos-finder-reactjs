import React, { useEffect, useState } from 'react';
import UserInformationsCard from '../UserInformationsCard';
import RepositoriesAccordion from '../RepositoriesAccordion';
import Navigation from '../Navigation';

const UserInformations = ({ username }) => {
    return (
        <>
        <Navigation />
        <UserInformationsCard />
        <RepositoriesAccordion />
        </>
    );
};

export default UserInformations;

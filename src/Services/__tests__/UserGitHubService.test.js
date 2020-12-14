import MockAxios from 'axios';
import MockUserInformationsUnstandardizer from '../../__mocks__/json/userInformationsUnstandardizer.json';
import MockUserInformationsStandardizer from '../../__mocks__/json/userInformationsStandardizer.json';
import UserGitHubService from '../UserGitHubService';
import { URL_API_GITHUB } from '../../Config/constants';

it("call getUserGitHubByUserName and return user informations - 200", async () => {
    MockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({
            data: MockUserInformationsUnstandardizer
        })
    );
    const userInformations = await UserGitHubService.getUserGitHubByUserName("victorgoretti");
    expect(MockAxios.get).toHaveBeenCalledWith(`${URL_API_GITHUB}/users/victorgoretti`);
    expect(userInformations).toEqual(MockUserInformationsStandardizer);
});

it("Error: call getUserGitHubByUserName and return user informations - 404", async () => {
    MockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({})
    );
    const userInformations = await UserGitHubService.getUserGitHubByUserName("noOne");
    expect(userInformations).toEqual({});
});



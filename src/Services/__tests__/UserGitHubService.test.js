import MockAxios from 'axios';
import MockUserInformationsUnstandardizer from '../../__mocks__/json/userInformationsUnstandardizer.json';
import MockUserInformationsStandardizer from '../../__mocks__/json/userInformationsStandardizer.json';
import UserGitHubService from '../UserGitHubService';
import { URL_API_GITHUB } from '../../Config/constants';

describe("Services/UserGitHubService", () => {
    describe("Call getUserGitHubByUserName and return user informations - 200", () => {
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
    });

    describe("Error: call getUserGitHubByUserName and return user informations - 404", () => {
        it("error: call getUserGitHubByUserName and return user informations - 404", async () => {
            const error = console.error;
            console.error = () => {};
            const userInformations = await UserGitHubService.getUserGitHubByUserName("noOne");
            expect(userInformations).toEqual({user:{}, status:404});
            console.error = error;
        });
    });
});



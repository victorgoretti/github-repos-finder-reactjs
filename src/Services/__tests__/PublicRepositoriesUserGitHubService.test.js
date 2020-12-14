import MockAxios from 'axios';
import MockRepositoriesUserUnstandardizer from '../../__mocks__/json/repositoriesUserUnstandardizer.json';
import MockRepositoriesUserStandardizer from '../../__mocks__/json/repositoriesUserStandardizer.json';
import PublicRepositoriesUserGitHubService from '../PublicRepositoriesUserGitHubService';
import { URL_API_GITHUB } from '../../Config/constants';

describe("Services/PublicRepositoriesUserGitHubService", () => {
    describe("Call getPublicRepositoriesUserGitHubByUserName and return public repositories - 200", () => {
        it("call getPublicRepositoriesUserGitHubByUserName and return public repositories - 200", async () => {
            MockAxios.get.mockImplementationOnce(() => 
                Promise.resolve({
                    data: MockRepositoriesUserUnstandardizer
                })
            );
            const publicRepositories = await PublicRepositoriesUserGitHubService.getPublicRepositoriesUserGitHubByUserName("victorgoretti");
            expect(MockAxios.get).toHaveBeenCalledWith(`${URL_API_GITHUB}/users/victorgoretti/repos`);
            expect(publicRepositories).toEqual(MockRepositoriesUserStandardizer);
        });
    });

    describe("Error: call getPublicRepositoriesUserGitHubByUserName and return public repositories - 404", () => {
        it("error: call getPublicRepositoriesUserGitHubByUserName and return public repositories - 404", async () => {
            const error = console.error;
            console.error = () => {};
            const publicRepositories = await PublicRepositoriesUserGitHubService.getPublicRepositoriesUserGitHubByUserName("noOne");
            expect(publicRepositories).toEqual({repositories:[], status:404});
            console.error = error;
        });
    });
});



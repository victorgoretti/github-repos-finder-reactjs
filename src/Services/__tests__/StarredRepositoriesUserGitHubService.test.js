import MockAxios from 'axios';
import MockRepositoriesUserUnstandardizer from '../../__mocks__/json/repositoriesUserUnstandardizer.json';
import MockRepositoriesUserStandardizer from '../../__mocks__/json/repositoriesUserStandardizer.json';
import StarredRepositoriesUserGitHubService from '../StarredRepositoriesUserGitHubService';
import { URL_API_GITHUB } from '../../Config/constants';

describe("Services/StarredRepositoriesUserGitHubService", () => {
    describe("Call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 200", () => {
        it("call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 200", async () => {
            MockAxios.get.mockImplementationOnce(() => 
                Promise.resolve({
                    data: MockRepositoriesUserUnstandardizer
                })
            );
            const starredRepositories = await StarredRepositoriesUserGitHubService.getStarredRepositoriesUserGitHubByUserName("victorgoretti");
            expect(MockAxios.get).toHaveBeenCalledWith(`${URL_API_GITHUB}/users/victorgoretti/starred`);
            expect(starredRepositories).toEqual(MockRepositoriesUserStandardizer);
        });
    });

    describe("Error: call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 404", () => {
        it("error: call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 404", async () => {
            MockAxios.get.mockImplementationOnce(() => 
                Promise.resolve({})
            );
            const starredRepositories = await StarredRepositoriesUserGitHubService.getStarredRepositoriesUserGitHubByUserName("noOne");
            expect(starredRepositories).toEqual([]);
        });
    });
});



import MockAxios from 'axios';
import MockRepositoriesUserUnstandardizer from '../../__mocks__/json/repositoriesUserUnstandardizer.json';
import MockRepositoriesUserStandardizer from '../../__mocks__/json/repositoriesUserStandardizer.json';
import PublicRepositoriesUserGitHubService from '../PublicRepositoriesUserGitHubService';
import { URL_API_GITHUB } from '../../Config/constants';

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

it("Error: call getPublicRepositoriesUserGitHubByUserName and return public repositories - 404", async () => {
    MockAxios.get.mockImplementationOnce(() => 
        Promise.resolve({})
    );
    const publicRepositories = await PublicRepositoriesUserGitHubService.getPublicRepositoriesUserGitHubByUserName("noOne");
    expect(publicRepositories).toEqual([]);
});



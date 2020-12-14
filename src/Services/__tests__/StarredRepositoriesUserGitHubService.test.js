import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import MockRepositoriesUserUnstandardizer from '../../__mocks__/json/repositoriesUserUnstandardizer.json';
import MockRepositoriesUserStandardizer from '../../__mocks__/json/repositoriesUserStandardizer.json';
import { URL_API_GITHUB } from '../../Config/constants';
import StarredRepositoriesUserGitHubService from '../StarredRepositoriesUserGitHubService';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Services/StarredRepositoriesUserGitHubService', () => {
    let repositoriesUnstandardizer;
    let repositoriesStandardizer;
    const usernameNonExistant = 'noOne';

    before(() => {
        repositoriesUnstandardizer = MockRepositoriesUserUnstandardizer;
        repositoriesStandardizer = MockRepositoriesUserStandardizer;
    });

    describe('getStarredRepositoriesUserGitHubByUserName', () => {
        let axiosGetUserStub;
        let getStarredRepositoriesUserGitHubByUserNameStub;

        beforeEach(() => {
            axiosGetUserStub = sinon.stub(axios, 'get');
            getStarredRepositoriesUserGitHubByUserNameStub = sinon.stub(StarredRepositoriesUserGitHubService, 'getStarredRepositoriesUserGitHubByUserName');
            axiosGetUserStub
                .withArgs(
                    `${URL_API_GITHUB}/users/${repositoriesUnstandardizer[0].owner.name}/starred`
                )
                .resolves(repositoriesUnstandardizer);

            getStarredRepositoriesUserGitHubByUserNameStub
                .withArgs(repositoriesUnstandardizer[0].owner.name)
                .returns(repositoriesStandardizer);
            
            getStarredRepositoriesUserGitHubByUserNameStub.withArgs(usernameNonExistant)
                .returns({repositories:[], status:404});
        });

        afterEach(() => {
            axiosGetUserStub.restore();
            getStarredRepositoriesUserGitHubByUserNameStub.restore();
        });

        context("Call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 200", () => {
            it("call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 200", async () => {
                const response = await axios.get(
                    `${URL_API_GITHUB}/users/${repositoriesUnstandardizer[0].owner.name}/starred`
                );

                const userInformations = await StarredRepositoriesUserGitHubService.getStarredRepositoriesUserGitHubByUserName(
                    repositoriesUnstandardizer[0].owner.name
                );

                expect(axios.get).to.have.callCount(1);
                expect(response).to.be.eql(repositoriesUnstandardizer);
                expect(userInformations).to.be.eql(repositoriesStandardizer);
            });
        });

        context("Error: call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 404", () => {
            it("error: call getStarredRepositoriesUserGitHubByUserName and return starred repositories - 404", async () => {
                const userInformations = await StarredRepositoriesUserGitHubService.getStarredRepositoriesUserGitHubByUserName(
                    usernameNonExistant
                );

                expect(userInformations).to.be.eql({repositories:[], status:404});
            });
        });
    });

});




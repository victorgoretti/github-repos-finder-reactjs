import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import MockRepositoriesUserUnstandardizer from '../../__mocks__/json/repositoriesUserUnstandardizer.json';
import MockRepositoriesUserStandardizer from '../../__mocks__/json/repositoriesUserStandardizer.json';
import { URL_API_GITHUB } from '../../Config/constants';
import PublicRepositoriesUserGitHubService from '../PublicRepositoriesUserGitHubService';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Services/PublicRepositoriesUserGitHubService', () => {
    let repositoriesUnstandardizer;
    let repositoriesStandardizer;
    const usernameNonExistant = 'noOne';

    before(() => {
        repositoriesUnstandardizer = MockRepositoriesUserUnstandardizer;
        repositoriesStandardizer = MockRepositoriesUserStandardizer;
    });

    describe('getPublicRepositoriesUserGitHubByUserName', () => {
        let axiosGetUserStub;
        let getPublicRepositoriesUserGitHubByUserNameStub;

        beforeEach(() => {
            axiosGetUserStub = sinon.stub(axios, 'get');
            getPublicRepositoriesUserGitHubByUserNameStub = sinon.stub(PublicRepositoriesUserGitHubService, 'getPublicRepositoriesUserGitHubByUserName');
            axiosGetUserStub
                .withArgs(
                    `${URL_API_GITHUB}/users/${repositoriesUnstandardizer[0].owner.name}/repos`
                )
                .resolves(repositoriesUnstandardizer);

            getPublicRepositoriesUserGitHubByUserNameStub
                .withArgs(repositoriesUnstandardizer[0].owner.name)
                .returns(repositoriesStandardizer);
            
            getPublicRepositoriesUserGitHubByUserNameStub.withArgs(usernameNonExistant)
                .returns({repositories:[], status:404});
        });

        afterEach(() => {
            axiosGetUserStub.restore();
            getPublicRepositoriesUserGitHubByUserNameStub.restore();
        });

        context("Call getPublicRepositoriesUserGitHubByUserName and return public repositories - 200", () => {
            it("call getPublicRepositoriesUserGitHubByUserName and return public repositories - 200", async () => {
                const response = await axios.get(
                    `${URL_API_GITHUB}/users/${repositoriesUnstandardizer[0].owner.name}/repos`
                );

                const userInformations = await PublicRepositoriesUserGitHubService.getPublicRepositoriesUserGitHubByUserName(
                    repositoriesUnstandardizer[0].owner.name
                );

                expect(axios.get).to.have.callCount(1);
                expect(response).to.be.eql(repositoriesUnstandardizer);
                expect(userInformations).to.be.eql(repositoriesStandardizer);
            });
        });

        context("Error: call getPublicRepositoriesUserGitHubByUserName and return public repositories - 404", () => {
            it("error: call getPublicRepositoriesUserGitHubByUserName and return public repositories - 404", async () => {
                const userInformations = await PublicRepositoriesUserGitHubService.getPublicRepositoriesUserGitHubByUserName(
                    usernameNonExistant
                );

                expect(userInformations).to.be.eql({repositories:[], status:404});
            });
        });
    });

});




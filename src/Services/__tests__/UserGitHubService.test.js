import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import MockUserInformationsUnstandardizer from '../../__mocks__/json/userInformationsUnstandardizer.json';
import MockUserInformationsStandardizer from '../../__mocks__/json/userInformationsStandardizer.json';
import { URL_API_GITHUB } from '../../Config/constants';
import UserGitHubService from '../UserGitHubService';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Services/UserGitHubService', () => {
    let userInformationsUnstandardizer;
    let userInformationsStandardizer;
    const usernameNonExistant = 'noOne';

    before(() => {
        userInformationsUnstandardizer = MockUserInformationsUnstandardizer;
        userInformationsStandardizer = MockUserInformationsStandardizer;
    });

    describe('getUserGitHubByUserName', () => {
        let axiosGetUserStub;
        let getUserGitHubByUserNameStub;

        beforeEach(() => {
            axiosGetUserStub = sinon.stub(axios, 'get');
            getUserGitHubByUserNameStub = sinon.stub(UserGitHubService, 'getUserGitHubByUserName');

            axiosGetUserStub
                .withArgs(
                    `${URL_API_GITHUB}/users/${userInformationsUnstandardizer.name}`
                )
                .resolves(userInformationsUnstandardizer);

            getUserGitHubByUserNameStub
                .withArgs(userInformationsUnstandardizer.name)
                .returns(userInformationsStandardizer);
            
            getUserGitHubByUserNameStub.withArgs(usernameNonExistant)
                .returns({user:{}, status:404});
        });

        afterEach(() => {
            axiosGetUserStub.restore();
            getUserGitHubByUserNameStub.restore();
        });

        context("Call getUserGitHubByUserName and return user informations - 200", () => {
            it("call getUserGitHubByUserName and return user informations - 200", async () => {
                const response = await axios.get(
                    `${URL_API_GITHUB}/users/${userInformationsUnstandardizer.name}`
                );

                const userInformations = await UserGitHubService.getUserGitHubByUserName(
                    userInformationsUnstandardizer.name
                );

                expect(axios.get).to.have.callCount(1);
                expect(response).to.be.eql(userInformationsUnstandardizer);
                expect(userInformations).to.be.eql(userInformationsStandardizer);
            });
        });

        context("Error: call getUserGitHubByUserName and return user informations - 404", () => {
            it("error: call getUserGitHubByUserName and return user informations - 404", async () => {
                const userInformations = await UserGitHubService.getUserGitHubByUserName(
                    usernameNonExistant
                );

                expect(userInformations).to.be.eql({user:{}, status:404});
            });
        });
    });

});




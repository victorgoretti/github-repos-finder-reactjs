export const standardizeUserInformationsFields = (user) => {
    if (!user) {
        return {};
    }
    return {
        id: user?.id,
        login: user?.login,
        name: user?.name,
        company: user?.company,
        blog: user?.blog,
        location: user?.location,
        email: user?.email,
        hireable: user?.hireable,
        bio: user?.bio,
        followers: user?.followers,
        following: user?.following,
        avatarUrl: user?.avatar_url,
        htmlUrl: user?.html_url,
        twitterUserName: user?.twitter_username,
        publicRepos: user?.public_repos,
        publicGists: user?.public_gists,
        createdAt: user?.created_at,
        updatedAt: user?.updated_at,
        status: 200
    };
};

export const standardizeRepositoryFields = (repositories) => {
    if (!repositories) {
        return [];
    }

    return repositories.map((repository) => ({
        id: repository.id,
        name: repository.name,
        owner: standardizeUserInformationsFields(repository.owner),
        description: repository.description,
        htmlUrl: repository.html_url,
        forksCount: repository.forks_count,
        homepage: repository.homepage,
        language: repository.language,
        stargazersCount: repository.stargazers_count,
        watchersCount: repository.watchers_count,
        openIssuesCount: repository.open_issues_count,
        createdAt: repository.created_at,
        updatedAt: repository.updated_at,
        pushedAt: repository.pushed_at,
        status: 200
    }));
};






interface Users {
    POST_USER: {
        name: string;
        job: string;
    };
    PUT_OR_PATCH_USER: {
        name: string;
        job: string;
    };
    POST_REGISTER_SUC_USER: {
        email: string;
        password: string;
    };
    POST_REGISTER_UNSUC_USER: {
        email: string;
    };
}

export const USERS: Users = {
    POST_USER: {
        name: "morpheus",
        job: "leader",
    },
    PUT_OR_PATCH_USER: {
        name: "morpheus",
        job: "zion resident",
    },
    POST_REGISTER_SUC_USER: {
        email: "eve.holt@reqres.in",
        password: "pistol",
    },
    POST_REGISTER_UNSUC_USER: {
        email: "sydney@fife",
    },
};

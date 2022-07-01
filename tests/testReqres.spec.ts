import superagent from "superagent";
import { ENDPOINTS } from "../constants/endpoints";
import { STATUS_CODES } from "../constants/statusCodes";
import { USERS } from "../constants/users";

const { POST_USER, POST_REGISTER_SUC_USER, POST_REGISTER_UNSUC_USER, PUT_OR_PATCH_USER } = USERS;
const { name, job } = POST_USER;
const { email, password } = POST_REGISTER_SUC_USER;

describe("API testing Reqres.in", () => {
    test("List users", async () => {
        let result: any = await superagent.get(ENDPOINTS.GET.LIST_USERS);
        expect(result.status).toBe(STATUS_CODES.OK);
    });

    test("Single user", async () => {
        let result: any = await superagent.get(ENDPOINTS.GET.SINGLE_USER);
        expect(result.status).toBe(STATUS_CODES.OK);
    });

    test("List Resource", async () => {
        let result: any = await superagent.get(ENDPOINTS.GET.LIST_RESOURCE);
        expect(result.status).toBe(STATUS_CODES.OK);
    });

    test("Single Resource", async () => {
        let result: any = await superagent.get(ENDPOINTS.GET.LIST_RESOURCE);
        expect(result.status).toBe(STATUS_CODES.OK);
    });

    test("Create User", async () => {
        let result: any = await superagent.post(ENDPOINTS.POST.CREATE).send({ name, job });
        expect(result.status).toBe(STATUS_CODES.CREATED);
        expect(result.body?.name).toBe(POST_USER.name);
        expect(result.body?.job).toBe(POST_USER.job);
    });

    test("Register User - SUCCESSFUL", async () => {
        let expectedField = {
            id: 4,
            token: "QpwL5tke4Pnpja7X4",
        };
        let result: any = await superagent.post(ENDPOINTS.POST.REGISTER_SUCCESSFUL).send({ email, password });
        expect(result.status).toBe(STATUS_CODES.OK);
        expect(result.body?.id).toBe(expectedField.id);
        expect(result.body?.token).toBe(expectedField.token);
    });

    test("Register User - UNSUCCESSFUL", async () => {
        const { email } = POST_REGISTER_UNSUC_USER;
        const expectedField = {
            error: "Missing password",
        };
        try {
            let result: any = await superagent.post(ENDPOINTS.POST.REGISTER_UNSUCCESSFUL).send({ email });
            expect(result.status).toBe(STATUS_CODES.BAD_REQUEST);
            expect(result.body?.error).toBe(expectedField);
        } catch (err: any) {
            console.log(err.message);
        }
    });

    test("Put - Update", async () => {
        const { name, job } = PUT_OR_PATCH_USER;
        let result: any = await superagent.put(ENDPOINTS.PUT.UPDATE).send({ name, job });
        expect(result.status).toBe(STATUS_CODES.OK);
        expect(result.body?.name).toBe(PUT_OR_PATCH_USER.name);
        expect(result.body?.job).toBe(PUT_OR_PATCH_USER.job);
    });

    test("Patch - Update", async () => {
        const { name, job } = PUT_OR_PATCH_USER;
        let result: any = await superagent.patch(ENDPOINTS.PATCH.UPDATE).send({ name, job });
        expect(result.status).toBe(STATUS_CODES.OK);
        expect(result.body?.name).toBe(PUT_OR_PATCH_USER.name);
        expect(result.body?.job).toBe(PUT_OR_PATCH_USER.job);
    });

    test("Delete", async () => {
        let result: any = await superagent.delete(ENDPOINTS.DELETE);
        expect(result.status).toBe(STATUS_CODES.NO_CONTENT);
    });
});

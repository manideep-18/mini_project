import AuthServiceFixture from "../../services/AuthService/index.fixture"

import AuthStore from "."

const authStore=new AuthStore(new AuthServiceFixture)

describe('AuthStore test cases',()=>{
    it('should test isAdminLoggedIn set to true when loginOrRegisterAPI called',async ()=>{
        const request={user_name:'test',user_password:'reactTesting'}

        await authStore.loginOrRegisterAPI(request)
        expect(authStore.isAdminLoggedIn).toBe(true)
    })
})
import loginReducer from'./index';
import  * as actions from './types';

it('should login successfully',()=>{
    const state={};

    const loginSuccessful={
        type: actions.LOGIN_SUCCESS,
        // response: {
        //     data: {
        //       user: {
        //         email: 'maggy@me.com',
        //         username: 'maggyisme',
        //       }
        //     },
            status: 200,
            statusText: 'OK',
        // }
        }
        const expectedResult={
            //type:'LOGIN_SUCCESS',
            status: 200,
            statusText: 'OK'
        }
        expect(loginReducer(state,loginSuccessful)).toEqual(expectedResult);
})

import * as usersAction from '../../actions/users'
import users, * as fromUsers from '../users'

describe('users Reducer', () => {
  it('users when receiving PROFILE_SUCCESS action', () => {
    const currentState = fromUsers.initialState
    const action = {
      type: usersAction.PROFILE_SUCCESS,
      payload: {
            username:"wedwedwe",
            first_name:"Grigor",
            last_name:"Margaryan",
            email:"grigor.margaryan89@mail.ru",
            title:"Good Boy",
            birthday:null,
            bio:null,
            available_for_hire:true,
            email_notification_settings:[
              {
                notification_type: "nl",
                notification_text: "Subscribe to our Newsletter",
                enabled: false
              }
        ]
      }
    }

    const nextState = users(currentState, action)
    expect(nextState.userInfo).toEqual(action.payload)
  })

})

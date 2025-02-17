class User {
  constructor(id, password) {
    this.id = id;
    this.password = password
  }
}

class UserManager {
  loginUser(user, input, onLogin, onFail) {
    setTimeout(() => {
      if (input[0] === user.id && input[1] === user.password)
        onLogin(user)
      else
        onFail(new Error('login failed'))
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (!user || !(user instanceof User))
        onError(new Error('access denied'))
      else if (user.id == 'admin')
        onSuccess({ name: user.id, role: '관리자' })
      else
        onSuccess({ name: user.id, role: '일반회원' })
    }, 1000);
  }
}
const um = new UserManager();
const user1 = new User('admin', '1234')
const user2 = new User('test', '1111')

const input1 = ['admin', '1234']
const input2 = ['test1', '1111']
const input3 = ['test', '1111']

um.loginUser(user1, input1, (user1) => {
  um.getRoles(user1, (member) => {
    console.log(`${member.name}는 ${member.role}`)
  }, (error) => { console.log(error) })
}, (error) => { console.log(error) })
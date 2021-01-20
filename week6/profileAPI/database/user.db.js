/**
 * @user {id: number, emailh:string, password:string, name:string}
 */

const users = [
    {id: 1, email:"test@test1",password:"1234", name:'박해미'},
    {id: 2, email:"test@test2",password:"1234", name:'안녕'},
    {id: 3, email:"test@test3",password:"1234", name:'하세요'},
]

const getUser = (userId)=> users.find((user)=>user.id === userId)

const getUserByEmail = (email)=> users.find((user)=>user.email === email)

module.exports = {
    users,
    getUser,
    getUserByEmail
}
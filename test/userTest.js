const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');


chai.should()
chai.use(chaiHttp);

describe('User API',()=>{


    /**login user */
    describe('POST /user/login',()=>{
        it('match password from user to the db',(done)=>{
            let user = {
                email:'mail@email.com',
                password:'testing123'
            }
            chai.request(server)
                .post('/user/login')
                .send(user)
                .end((error,response)=>{
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                done()
                })
        })
    })

    /**all users */
    describe('GET /user/allusers',()=>{
        it('get all the users from the db',(done)=>{
            chai.request(server)
                .get('/user/allusers')
                .end((error,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object')
                    response.body.data.should.be.a('array')
                done()
                })

        })
    })
})
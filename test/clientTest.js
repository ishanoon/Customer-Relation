const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');


chai.should()
chai.use(chaiHttp);

describe('Clients API',()=>{
    
    /**Get all cleint */
    describe('GET /client/clients',()=>{
        it('get all client',(done)=>{
            chai.request(server)
                .get("/client/allclient")
                .end((error ,response)=>{
                    response.should.have.status(200);
                    response.body.data.should.be.a('array');
                    response.body.data.length.should.not.be.eq(0)
                done()
                })
        })
    })

    describe('GET /client/client',()=>{
        it('should not get all client',(done)=>{
            chai.request(server)
                .get("/client/allclients")
                .end((err,response)=>{
                    response.should.have.status(404);
                done()
                })
        })
    })

    /**add client */

    describe('POST /client/addclient',()=>{
        it('post new client',(done)=>{
            let client = {
                name:'Tesla',
                Reps:[{
                    fullname:'jone',
                    email:'email@email.com',
                    position:'dev'
                }]
            }
            chai.request(server)
                .post('/client/addclient')
                .send(client)
                .end((error,response)=>{
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.data.should.have.property('name')
                    response.body.data.should.have.property('Reps')
                    response.body.data.Reps.should.have.be .a('array')
                done()
                })

        })
    })
})



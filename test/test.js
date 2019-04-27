'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');

var request = require('supertest');
const express = require('express');
const app = express();

// Configure chai
chai.use(chaiHttp);
chai.should();

// Constant for MAX_REG per request
const MAX_REG = 12;

// Constant for the quantity of categories on the database
const QTY_CATEGORIES = 12;

// A weird product name... for testing only
const weirdProductName = 'r2d2';

// Page for requesting products. i.g: I want to see page 8 of the list of products
const page = 8;

// Constant for a search by name and page
const searchProductByPage = 'television';
const invalidPage = 999;

// Constant for backend URL
const url = request('http://localhost:8000/api/v1');

//==================== API test ====================

describe('GET /route404', function() {
    it('should 404 without routes', function(done){
        request(express())
        .get('/route404')
        .expect(404, done);
    })
});

/**
 * Testing get all categories endpoint
 */
describe('GET /products/categories', 
function() {
    it(`respond with json containing a list of ${QTY_CATEGORIES} categories`, 
    function(done) {
      url
        .get('/products/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
            res.status.should.be.equal(200)              
            res.body.should.be.an('array').to.have.lengthOf(QTY_CATEGORIES);
            done();
          });
    });
  });


/**
 * Testing get all products endpoint
 */
describe('GET /products', 
function() {
    it(`respond with json containing a list of ${MAX_REG} products`, 
    function(done) {
      url
        .get('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.status.should.be.equal(200)  
          res.body.should.be.an('array').to.have.lengthOf(MAX_REG);
          done();
        });
    });
  });  

/**
 * Testing get products by page endpoint
 */
describe('GET /products by page', 
function() {
    it(`respond with json containing a list of ${MAX_REG} products on page ${page}`, 
    function(done) {
      url
        .get(`/products/?&page=${page}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.status.should.be.equal(200)  
          res.body.should.be.an('array').to.have.lengthOf(MAX_REG);
          done();
        });
    });
  });    

/**
 * Testing get products by name endpoint
 */
describe('GET /products by name', 
function() {
    it(`respond with json containing a list of ${MAX_REG} products`, 
    function(done) {
      url
        .get('/products/?&name=television')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {                        
          res.status.should.be.equal(200);             
          res.body.should.be.an('array').to.have.lengthOf(MAX_REG);
          done();
        });
    });
  });

/**
 * Testing get products by name and page endpoint
 */
describe('GET /products by name and page', 
function() {
    it(`respond with json containing a list of ${MAX_REG} products, from page ${page} from database`, 
    function(done) {
      url
        .get(`/products/?page=${page}&name=television`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {                        
          res.status.should.be.equal(200);             
          res.body.should.be.an('array').to.have.lengthOf(MAX_REG);
          done();
        });
    });
  });  

/**
 * Testing get products by name and INVALID page endpoint
 */
describe('GET /products by name and INVALID page', 
function() {
    it(`respond with code 404, because doesn't exists page ${invalidPage} for search by ${searchProductByPage}`, 
    function(done) {
      url
        .get(`/products/?page=${invalidPage}&name=${searchProductByPage}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {                        
          res.status.should.be.equal(404);             
          done();
        });
    });
  });    

/**
 * Testing get products by name endpoint
 */
describe('GET /products by (weird) name', function() {
    it(`respond with code 404, because the product {${weirdProductName}} doesn't exists`, 
    function(done) {
      url
        .get(`/products/?&name=${weirdProductName}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {                        
          res.status.should.be.equal(404);             
          res.body.should.be.an('array').to.have.empty;
          done();
        });
    });
  });

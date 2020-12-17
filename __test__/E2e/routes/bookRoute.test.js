/* eslint-disable node/no-extraneous-require */
/* eslint-disable node/no-unpublished-require */
const request = require('supertest');
const app = require('../../../index');

const dbHandler = require('../../config/db');
describe('book routes', () => {
  let endPoint;
  beforeAll((done) => {
    dbHandler.connect().then(done);
  });
  afterEach(async () => await dbHandler.clearDatabase());

  afterAll(async () => await dbHandler.closeDatabase());
  it('GET: /api/v1/book (get all books) ', (done) => {
    endPoint = '/api/v1/book';
    request(app)
      .get(endPoint)
      .send({
        success: true,
        code: 200,
        count: 1,
        books: [{ _id: 'kjhdsa' }],
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      })
      .catch((err) => done(err));
  });
  it('GET: /api/v1/book/:id (get book by id) ', (done) => {
    endPoint = '/api/v1/book/5fd85c78465b8824040e361a';
    request(app)
      .get(endPoint)
      .then((res) => {
        expect(res.body.code).toBe(400);
        done();
      })
      .catch((err) => done(err));
  });
  it('GET: /api/v1/book/:id (not valid id) ', (done) => {
    endPoint = '/api/v1/book/randomId';
    request(app)
      .get(endPoint)
      .send({
        success: true,
        code: 200,
        books: { _id: 'kjhdsa' },
      })
      .then((res) => {
        const body = res.body;
        expect(body.error.msg).toBe('not valid id');
        expect(res.statusCode).toBe(400);
        done();
      })
      .catch((err) => done(err));
  });
  it('POST: /api/v1/book  ', (done) => {
    endPoint = '/api/v1/book';
    request(app)
      .post(endPoint)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({ bookName: 'day and night ' })
      .then((res) => {
        const body = res.body;
        expect(body.success).toBe(true);
        expect(body.code).toBe(201);
        done();
      })
      .catch((err) => done(err));
  });
  it('DELETE: /api/v1/book/:id', (done) => {
    endPoint = '/api/v1/book/5fd85c78465b8824040e362a';
    request(app)
      .delete(endPoint)
      .set('Accept', 'application/json')
      .then((res) => {
        const body = res.body;
        expect(body.success).toBe(false);
        expect(body.code).toBe(400);
        expect(body.message).toBe('book not found with this id');
        done();
      })
      .catch((err) => done(err));
  });
  describe('PUT', () => {
    it('PUT: /api/v1/book/:id', async (done) => {
      endPoint = '/api/v1/book/5fd85c78465b8824040e361a';
      const { body } = await request(app)
        .put(endPoint)
        .set('Accept', 'application/json')
        .set('Accept', 'application/json')
        .send({ bookName: 'day and night updated' });
      expect(body.success).toBe(false);
      expect(body.code).toBe(400);
      expect(body.message).toBe('book not found with this id');

      done();
    });
    it('PUT: /api/v1/book/:id', async (done) => {
      endPoint = '/api/v1/book';
      let { body } = await request(app)
        .post(endPoint)
        .set('Accept', 'application/json')
        .set('Accept', 'application/json')
        .send({ bookName: 'day and night' });
      expect(body.success).toBe(true);
      expect(body.code).toBe(201);
      let { book } = body;
      let res = await request(app)
        .put(endPoint + `/${book._id}`)
        .set('Accept', 'application/json')
        .set('Accept', 'application/json')
        .send({ bookName: 'day and night updated' });
      expect(res.body.success).toBe(true);
      expect(res.body.code).toBe(200);
      expect(res.body.message).toBe('book updated successfully');

      done();
    });
  });
});

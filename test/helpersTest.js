const { assert } = require('chai');

const { getUserByEmail } = require('../helpers');

const testUsers = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};

describe('getUserByEmail', function() {
  it('should return a user with valid email', function() {
    const user = getUserByEmail("user@example.com", testUsers);
    const expectedUserID = "userRandomID";
    // assert statement
    assert.strictEqual(user.id, expectedUserID,'Returned user ID should match expected user ID');
  });
  
  it('should return undefined for non-existent email', function() {
    const user = getUserByEmail("nonexistent@example.com", testUsers);
    assert.equal(user, undefined);
  });

  it('should return null for empty email', function() {
    const user = getUserByEmail("", testUsers);
    assert.isNull(user);
  });

});
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    submittedUsers.every(function(submittedUser) {
      return submittedUser in goodUsers;
    })
  }
}

module.exports = checkUsersValid;

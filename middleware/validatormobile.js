var validMobile = function (cellNumber) {
  const regex = /(((\+)|(00))88)?01(3|4|5|6|7|8|9)(\d){8}/;
  var result = regex.exec(cellNumber);

  if (result != null && result[0] === cellNumber) {
    return true;
  } else {
    return false;
  }
};

/**
 * export module
 */
module.exports = {
  validMobile,
};

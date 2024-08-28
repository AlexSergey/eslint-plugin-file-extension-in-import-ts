const aliasExtensions = (alias, path) => {
  if (path[alias]) {
    return path[alias];
  }

  return alias;
};

module.exports = aliasExtensions;

module.exports.schema = { type: 'object' };

module.exports.aliasDefault = {};

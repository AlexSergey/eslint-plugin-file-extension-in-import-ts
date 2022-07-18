const mappingExtensions = (ext, mapping) => {
  if (mapping[ext]) {
    return mapping[ext];
  }

  return ext;
};

module.exports = mappingExtensions;

module.exports.schema = { type: 'object' };

module.exports.mappingDefault = {
  '.ts': '.js',
  '.tsx': '.js',
};

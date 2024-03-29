const DEFAULT_VALUE = Object.freeze([]);

/**
 * Gets `resolvePaths` property from a given option object.
 *
 * @param {object|undefined} option - An option object to get.
 * @returns {string[]|null} The `allowModules` value, or `null`.
 */
function get(option) {
  if (option && option.resolvePaths && Array.isArray(option.resolvePaths)) {
    return option.resolvePaths.map(String);
  }

  return null;
}

/**
 * Gets "resolvePaths" setting.
 *
 * 1. This checks `options` property, then returns it if exists.
 * 2. This checks `settings.node` property, then returns it if exists.
 * 3. This returns `[]`.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {string[]} A list of extensions.
 */
module.exports = function getResolvePaths(context, optionIndex = 0) {
  return (
    get(context.options && context.options[optionIndex]) ||
    get(context.settings && context.settings.node) ||
    DEFAULT_VALUE
  );
};

module.exports.schema = {
  items: { type: 'string' },
  type: 'array',
  uniqueItems: true,
};

export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
}

const URL_PARAM_REGEXP = /:\w+/g;

const urlToRegExp = url => RegExp(`^${url.replace(URL_PARAM_REGEXP, '(.*)')}$`);

const isUrlParam = path => URL_PARAM_REGEXP.test(path);

export const isEqualPaths = (template, url) => urlToRegExp(template).test(url);

export const extractUrlParams = (template, url) => {
  const values = url.split('/');
  const params = {};
  
  if (!values) {
    return params
  }
  return template.split('/').reduce((acc, param, index) => {
    if (!isUrlParam(param)) {
      return acc
    }
    acc[param.slice(1)] = values[index];
    return acc
  }, params)
}

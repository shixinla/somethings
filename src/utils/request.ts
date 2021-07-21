const baseUrls = {
  prd: "",
  test: "",
  dev: "",
};

const baseUrl = baseUrls.dev;

const baseInit: RequestInit = {
  headers: {
    "Content-type": "application/json; charset=utf8;",
  },
  mode: "cors",
  cache: "no-cache",
};

function mergeOptions(
  target: { [key: string]: any },
  source: { [key: string]: any }
) {
  Object.keys(source).forEach((key, index) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
      target[key] = [...targetValue, ...sourceValue];
      return;
    }

    if (
      Object.prototype.toString.call(targetValue) === "[object Object]" &&
      Object.prototype.toString.call(sourceValue) === "[object Object]"
    ) {
      target[key] = mergeOptions(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      );
      return;
    }

    target[key] = sourceValue;
  });

  return target;
}

export default function request(
  input: RequestInfo,
  options?: RequestInit | undefined
) {
  if (typeof input === "string") {
    input = `${baseUrl}${input}`;
  } else {
    return fetch(input);
  }
  return fetch(
    input,
    typeof options === "undefined" ? undefined : mergeOptions(baseInit, options)
  );
}

// var a = {
//   headers: {
//     "Content-type": "text/html",
//   },
//   mode: "cors",
//   cache: "no-cache",
// } as Record<any, any>;

// var b = {
//   headers: {
//     "Content-type": "application/json; charset=utf8;",
//     token: "1231231",
//     "x-ss-token": "1231",
//   },
//   mode: "with",
//   cache: "normal",
// };

// console.log(mergeOptions(a, b));
// console.log(b);
// a.headers.test = 1;
// console.log(a);
// console.log(b);

// const request = new Request()

// export default

/**
 * Helper function for asynchronous functions with exception handling
 * @param {Function} fn Async function
 * @param {...any} args Optional arguments to be passed to the function.
 * @returns {Promise} A Promise that resolves to an object with 'response' and 'error' properties.
 */
export const withAsync = async (fn, ...args) => {
  try {
    const res = await fn(...args);
    const { response } = res;
    if (!response.success) {
      throw Error("Something went wrong while making the request");
    }
    return {
      response,
      error: null,
    };
  } catch (error) {
    console.error("Request Failed: ", error);
    return {
      response: null,
      error,
    };
  }
};

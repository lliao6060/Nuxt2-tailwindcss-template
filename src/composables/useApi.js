export default function useAPIs() {

  const isApiError = (x) => {
    return typeof x.code === 'number';
  };


  //mock api用
  async function useMockApi(api) {
    try {
      const res = await api
      if (res) {
        return res;
      } else {
        throw new Error(`errorType.${res.res}`)
      }
    } catch (err) {
      if (isApiError(err)) {
        apiFail(`${err.code} ${err.error}`)
      }
    }
  };

  async function useApi(api) {
    try {
      const res = await api
      if (res.res === 0) {
        return res;
      } else {
        throw new Error(`errorType.${res.res}`)
      }
    } catch (err) {
      if (isApiError(err)) {
        apiFail(`${err.code} ${err.error}`)
      }
    }
  };

  //錯誤測試用
  function testErrorApi() {
    return new Promise((resolve, reject) => {
      reject({ code: 123, error: "Error!" });
    });
  }

  async function testApiFail() {
    try {
      return await testErrorApi();
    } catch (error) {
      if (isApiError(error)) {
        apiFail(`${error.code} ${error.error}`)
      }
    }
  }

  function apiFail(msg) {
    console.log(msg)
  }


  return {
    useMockApi,
    useApi,
    testApiFail,
    apiFail
  }
}
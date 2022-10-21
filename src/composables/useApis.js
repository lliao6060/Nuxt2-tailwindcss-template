import { getCurrentInstance } from '@nuxtjs/composition-api'

export default function useAPIs() {
  const { proxy } = getCurrentInstance()

  const isApiError = (x) => {
    return typeof x.code === 'number';
  };


  // mock api用
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

  // 正式api
  async function useApi(url, method, data) {
    const keyName = method === 'get' ? 'params' : 'data';
    try {
      const res = await proxy.$api[`$${method}`](url, {
        [keyName]: data
      }).then((res) => res.data ?? res)
      return res
      // if (res.res === 0) {
      //   return res;
      // } else {
      //   throw new Error(`errorType.${res.res}`)
      // }
    } catch (err) {
      if (isApiError(err)) {
        apiFail(`${err.code} ${err.error}`)
      }
    }
  };

  // 錯誤測試用
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
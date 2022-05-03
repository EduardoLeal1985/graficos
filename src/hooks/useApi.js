import { useState } from "react";

import axios from "axios";

import useDebouncePromise from "./useDebouncePromise";

const initialRequest = {
  error: null,
  data: null,
  loading: false,
  timeout: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequest);

  const debouncedAxios = useDebouncePromise(axios, config.debounceDelay);

  async function call(localData) {
    setRequestInfo({
      ...initialRequest,
      loading: true,
      timeout: false,
    });

    let response = null;

    // const data = localStorage.getItem(`[@${process.env.REACT_APP_NAME}Token]`)
    //   ? localStorage.getItem(`[@${process.env.REACT_APP_NAME}Token]`)
    //   : undefined;

    const data = "duedu";

    let headers;

    const type = config.multi ? "multipart/form-data" : "application/json";

    if (data) {
      headers = {
        Authorization: `Bearer ${data}`,
        "Content-type": type,
      };
    }

    // console.log(headers);

    const fn = localData && localData.debounced ? debouncedAxios : axios;

    const baseURL = config.baseURL
      ? config.baseURL
      : process.env.REACT_APP_API_URL;
    console.log(baseURL);

    delete config.baseURL;

    console.log(localData);

    try {
      response = await fn({
        baseURL,
        headers,
        ...config,
        ...localData,
      });

      setRequestInfo({
        ...initialRequest,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.code);
      if (error.code && error.code === "ECONNABORTED") {
        setRequestInfo({
          ...initialRequest,
          error: "Sistema indisponível no momento.",
          status: 500,
        });
      } else {
        console.log(error.response);
        setRequestInfo({
          ...initialRequest,
          error: error.response.data.message,
          status: error.response.status,
        });
      }
    }

    if (config.onCompleted) {
      if (response) {
        config.onCompleted(response);
      }
    }

    return response;
  }

  return [call, requestInfo];
}

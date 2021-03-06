import React, { useEffect, useState } from "react";

function withFetch(WrappedInHOCComponent, requestUrl) {
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      if (requestUrl) fetchData(requestUrl);
    }, []);

    const fetchData = async (requestUrl) => {
      setIsLoading(true);
      setIsError(false);
      const myHeaders = new Headers();
      myHeaders.append(
        "Content-Type",
        "application/json",
        "Access-Control-Allow-Origin: null"
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        fetch("http://localhost:3000/products", requestOptions)
          .then((response) => response.text())
          .then((result) => setData(result))
          .catch((error) => console.log("error", error));
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(err);
      }
    };

    return (
      <WrappedInHOCComponent
        data={data}
        isLoading={isLoading}
        isError={isError}
        {...props}
        getData={(requestUrl) => fetchData(requestUrl)}
      />
    );
  };

  return WithFetch;
}

export default withFetch;

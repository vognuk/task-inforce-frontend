import React, { useEffect, useState } from "react";

function withFetch(WrappedInHOCComponent, requestUrl) {
  const MAIN_URL = "https://countries.trevorblades.com";

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
      myHeaders.append("Content-Type", "application/json");

      const graphql = JSON.stringify({
        query:
          "query ContinentsList { continents { name countries { name languages { name }}}}",
        variables: {},
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };

      try {
        fetch(MAIN_URL, requestOptions)
          .then((response) => response.text())
          .then((result) => setData(JSON.parse(result).data.continents))
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

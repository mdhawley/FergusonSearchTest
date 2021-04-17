import { useState } from "react";

const useSearchTerms = () => {
  const [searchText, setSearchText] = useState(null);
  const [searchTerms, setSearchTerms] = useState([]);

  const changeSearchText = (text) => {
    setSearchText(text);
    if (!!text) {
      fetchTerms();
    } else {
      setSearchTerms([]);
    }
  };

  const fetchTerms = () => {
    fetch(
      `https://www.ferguson.com/typeahead?Ntt=${searchText}*&jsonResponse=json`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "x-sec-clge-req-type": "ajax",
        },
        referrer: "https://www.ferguson.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const searchResults = [];
        if (data.elements[0]) {
          searchResults.push({
            title: "Keywords",
            data: data.elements[0].keywords.values,
          });
        }
        if (data.elements[1].terms) {
          searchResults.push({
            title: "Categories",
            data: data.elements[1].terms.values[0].values,
          });
        }
        if (data.elements[1].terms) {
          searchResults.push({
            title: "Brands",
            data: data.elements[1].terms?.values[1].values,
          });
        }

        setSearchTerms(searchResults);
      })
      .catch((e) => console.log(e));
  };

  return [searchTerms, changeSearchText];
};

export default useSearchTerms;

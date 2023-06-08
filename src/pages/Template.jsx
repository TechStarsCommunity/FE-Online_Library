import React from "react";
import useSWR from "swr";
import fetcher from "../fetch/useFetch";

// change the name of the function to match the name of the file
const Template = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) {
    console.log(error);
    return <div>Error loading data</div>;
  }

  if (!data) {
    console.log("loading data...");
    return <div>Loading...</div>;
  }

  console.log("Data:", data);
  console.log("hey there");

  return (
    <React.Fragment>
      {/* Write Your Normal HTML Here */}
      Template
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img
            src={product.image}
            style={{ height: "150px", width: "150px" }}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

// Also change the name of the function here
export default Template;

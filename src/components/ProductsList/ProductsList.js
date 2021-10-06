import React from "react";
// import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
// import FolderIcon from "@mui/icons-material/Folder";
const listOfProducts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1633435904321-c57da7093f02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    name: "Cake",
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: "300g",
    comments: ["CommentModel", "CommentModel"],
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1632138007282-219f0ccd9f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Bluebirds in the Backyard",
    count: 4,
    size: {
      width: 200,
      height: 200,
    },
    weight: "200g",
    comments: ["CommentModel", "CommentModel"],
  },
];

const ProductsList = ({ data }) => {
  console.log(JSON.parse(data));

  return (
    <>
      <Typography variant="h2" component="h2">
        Products list
      </Typography>
      <List>
        {console.log("ProductsList", typeof listOfProducts)}
        {listOfProducts.map((product) => (
          <ListItem key={uuidv4()}>
            <ListItemIcon>{/* <FolderIcon /> */}</ListItemIcon>
            {product.name}
            <ListItemText />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ProductsList;

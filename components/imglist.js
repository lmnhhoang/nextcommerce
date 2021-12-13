import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export default function SellerImageList() {
  return (
    <Box sx={{marginTop:"60px"}}>
    <ImageList
      sx={{ width: "100%" }}
      variant="quilted"
      cols={12}
      gap={30}
      rowHeight={220}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 50, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 3
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-2.jpg",
    title: "Burger",
    cols: 3
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-3.jpg",
    title: "Camera",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-6.jpg",
    title: "Coffee",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-8.jpg",
    title: "Hats",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-4.jpg",
    title: "Honey",
    author: "@arwinneil",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-5.jpg",
    title: "Basketball",
    cols: 3
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-7.jpg",
    title: "Fern",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn2-9.jpg",
    title: "Mushrooms",
    cols: 2
  }
];

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import ImageListItemBar from '@mui/material/ImageListItemBar';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export default function NewImageList() {
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
          <ImageListItemBar
          sx={{
                background:
                  "transparent",
              }}
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-1.jpg",
    title: "Smart Phone",
    cols: 4,
    caption:"",
    author:"Trend Collection"
    
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-3.jpg",
    rows: 2,
    cols: 4
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-4.jpg",
    cols: 2
  },

  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-6.jpg",
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-2.jpg",
    cols: 4

  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-7.jpg",
    
    cols: 2
  },
  {
    img: "http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/ebay-bn1-7.jpg",
    cols: 2
  }
  
];

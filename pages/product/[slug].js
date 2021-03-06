import Link from "next/link";
import Container from "@mui/material/Container";
import { useRouter } from 'next/router';
import client from '../../libs/apollo/ApolloClient';
import AddToCartButton from '../../components/cart/AddToCartButton';
import { PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS } from '../../libs/queries/product-by-slug';
import { isEmpty } from 'lodash';
// import GalleryCarousel from '../../components/single-product/gallery-carousel';
// import CategoriesCarousel from '../../components/single-product/categories-carousel';
import RelatedProduct from '../../components/single-product/related-product';
import Price from '../../components/single-product/price';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Banner from '../../assets/img/banner_page.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const colorHeading = '#323232';
const colorHover = '#40c6ff';
const colorDefaul = '#666';

const useStyle_productDetail = makeStyles({
    page: {
        marginBottom: "60px",
        minHeight: "200px",
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover"
    },

    titlePage: {
        display: "flex",
        paddingTop: "75px",
        paddingBottom: "75px",
        "@media (max-width: 768px)": {
            display: "block"
        }
    },

    rightTextPage: {
        paddingTop: "12px",
        float: "right",
        "@media (max-width: 768px)": {
            float: "inherit"
        }
    },



    imgagesDetail: {
        '& img': {
            width: '100%'
        }
    },
    galleryImages: {
        '& img': {
            width: '25%',
            border: '1px solid #ccc',
        }
    },
    name_product_detail: {
        fontSize: '30px',
        color: `${colorHeading}`,
        fontFamily: 'Merriweather',
    },
    description_shot: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'justify',
        lineHeight: '23px',
    },
    product_meta: {
        marginTop: '30px',
        padding: '30px 0px',
        float: 'left',
        width: '100%',
        marginBottom: '15px',
        borderTop: '1px solid #e4e4e4',
        borderBottom: '1px solid #e4e4e4',
        fontSize: '16px',
        color: '#676c77',
    },
    sku_title: {
        marginBottom: '15px',
    },
    description_detail: {
        marginTop: '70px',
        paddingTop: '50px',
        borderTop: '1px solid #e4e4e4',
        width: '100%',
        '& h4': {
            marginTop: '0px',
            fontSize: '20px',
            textTransform: 'uppercase',
            fontFamily: 'Merriweather',
        }
    },
    description_item: {
        fontSize: '16px',
        lineHeight: '23px',
        color: '#000',
        '& span': {
            fontSize: '16px',
            lineHeight: '23px',
            color: '#000',
        }
    },
    box_related_products: {
        width: '100%',
        marginTop: '30px',
        float: 'left',
        margin: '0px -15px',
        '& h4': {
            fontSize: '20px',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
    },
    related_products: {
        display: 'inline-block',
        width: '25%',
        padding: '0px 15px',
        marginBottom: '30px',
        '& img': {
            width: '100%',
        },
        '@media (max-width:899px)': {
            width: '50%',
        },
        '@media (max-width:767px)': {
            width: '100%',
        }
    },
    box_product: {
        border: '1px solid #efefef',
        padding: '15px 15px 22px 15px',
        transition: '0.35s',
        '&:hover': {
            boxShadow: '0 10px 6px -6px #ccc',
        }
    },
    cardBody: {
        textAlign: 'center',
        '& h3': {
            fontSize: '19px',
            fontWeight: 'bold',
            color: '#444',
            marginTop: '12px',
            marginBottom: '10px',
            fontFamily: 'Mulish,sans-serif',
            lineHeight: '24px',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '1',
        },
        '& h4': {
            marginTop: '6px',
            marginBottom: '0px',
        },
    },
    startRating: {
        textAlign: 'center',
        '& span': {
            color: '#ffcc35',
            fontSize: '18px',
        }
    },
    cardPrice: {
        color: `${colorHover}`,
        fontSize: '22px',
        fontWeight: '500',
        fontFamily: 'Mulish,sans-serif',
    },
})



export default function Product(props) {
    const classes = useStyle_productDetail();
    const { product } = props;
    //console.warn(product);

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Box className={classes.page}>
                <Container>
                    <Box className={classes.titlePage}>
                        <Grid item lg={6}>
                            <Box>
                                <Typography sx={{ color: "white" }} component="h3" variant="h3">
                                    Profile
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Box className={classes.rightTextPage}>
                                <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">

                                    <Typography
                                        sx={{ color: "white" }}
                                        component="h6"
                                        variant="h6"
                                    >
                                        Home
                                    </Typography>

                                    <Typography
                                        sx={{ color: "white" }}
                                        component="h6"
                                        variant="h6"
                                    >
                                        Profile
                                    </Typography>
                                </Breadcrumbs>
                            </Box>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <div>
                {product ? (
                    <div className={classes.singleProduct}>
                        <Container maxWidth="lg">
                            <Grid container direction="row" lg={12}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <div className={classes.imgagesDetail}>
                                        <img src={product?.image?.sourceUrl} alt="" />
                                        <div className={classes.galleryImages}>
                                            {!isEmpty(product?.galleryImages?.nodes) ? (
                                                {/* <GalleryCarousel gallery={product?.galleryImages?.nodes} /> */}
                                            ) : !isEmpty(product.image) ? (
                                                <img
                                                    src={product?.image?.sourceUrl}
                                                    alt="Product Image"
                                                    height="auto"
                                                    srcSet={product?.image?.srcSet}
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} >
                                    <div className='descDetail'>
                                        <h1 className={classes.name_product_detail}>{product.name}</h1>
                                        <Price salesPrice={product?.price} regularPrice={product?.regularPrice} />
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: product.shortDescription,
                                            }}
                                            className={classes.description_shot}
                                        />
                                        {<AddToCartButton product={product} />}
                                        <div className={classes.product_meta}>
                                            <div className={classes.sku_title}>SKU: {product.sku}</div>
                                            {!isEmpty(product?.productCategories?.nodes) ? (
                                                {/* <CategoriesCarousel gallery={product?.productCategories?.nodes} /> */}
                                            ) : !isEmpty(product.name) ? (
                                                <div className={classes.sku_name}>SKU: {product.name}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </Grid>
                                <div className={classes.description_detail}>
                                    <h4>Detail</h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                        className={classes.description_item}
                                    >
                                    </div>
                                </div>
                                <div className={classes.box_related_products}>
                                    <h4>Related products</h4>
                                    {product.related.nodes.length ? (
                                        product.related.nodes.map(item => (
                                            <div className={classes.related_products} key={item}>
                                                <div className={classes.box_product}>
                                                    <Link href={`/product/${item?.slug}`}>
                                                        <a>
                                                            <img
                                                                src={`${item.image.sourceUrl}?w=164&h=164&fit=crop&auto=format`}
                                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                                alt={item.title}
                                                                loading="lazy" />
                                                        </a>
                                                    </Link>
                                                    <div className={classes.cardBody}>
                                                        <h3>
                                                            <Link href={`/product/${item?.slug}`}>
                                                                <a className={classes.cardTitle}>{item.name}</a>
                                                            </Link>
                                                        </h3>
                                                        <div className={classes.startRating}>
                                                            <Rating name="read-only" value='0' readOnly />
                                                        </div>
                                                        <h4 className={classes.cardPrice}>
                                                            <span className={classes.price_sales}>{item.price}</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        )

                                    ) : ''}
                                </div>
                            </Grid>
                        </Container>
                    </div>
                ) : (
                    ''
                )
                }
            </div>
        </>
    );
};



export async function getStaticProps(context) {

    const { params: { slug } } = context

    const { data } = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 10,
        notFound: true,
    };
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: false
    }
}

import React, { Component, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Rating from '@mui/material/Rating';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true,
            statusHideShowComputer: false,
            fetchFilterComputer: [],
            fetchFilterSmartPhone: [],
            fetchFilterElectronis: [],
            fetchFilterJewelry: [],
            fetchFilterSport: [],
            listContent: [
                {
                    id: 1,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2016/12/a71-300x300.jpg',
                    price: "$350.00",
                    class: "SmartPhone"



                },
                {
                    id: 2,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2016/12/e14-300x300.jpg',
                    price: "$350.00",
                    class: "Computer"
                },
                {
                    id: 3,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/pr-watch-10-300x300.jpg',
                    price: "$350.00",
                    class: "SmartPhone"
                },
                {
                    id: 4,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2018/01/pr-watch-10-300x300.jpg',
                    price: "$350.00",
                    class: "Computer"
                },
                {
                    id: 5,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2017/12/watch-pr9-300x300.jpg',
                    price: "$350.00",
                    class: "SmartPhone"


                },
                {
                    id: 6,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2017/03/watch-pr1-300x300.jpg',
                    price: "$350.00",
                    class: "Computer"
                },
                {
                    id: 7,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2016/12/39-300x300.jpg',
                    price: "$350.00",
                    class: "SmartPhone"
                },
                {
                    id: 8,
                    title: "Apple Swatch",
                    image: 'http://solution.cmsmart.net/wp_multistore/ebay/wp-content/uploads/2017/03/watch-pr1-300x300.jpg',
                    price: "$350.00",
                    class: "Computer"
                }
            ]
        }
    }

    onViewAll = () => {
        this.setState({
            status: true,
            statusHideShowComputer: false,
            statusHideShowSmartPhone: false
        })
    }

    componentDidMount() {
        this.setState({
            listContent: this.state.listContent
        })
    }

    onViewComputer = () => {
        let filterDataComputer = this.state.listContent.filter(m => m.class === 'Computer');
        this.setState({
            fetchFilterComputer: filterDataComputer,
            statusHideShowComputer: true,
            statusHideShowJewelry: false,
            statusHideShowElectronis: false,
            statusHideShowSport: false,
            status: false,
            statusHideShowSmartPhone: false
        })
    }

    onViewSmartPhone = () => {
        let filterDataSmartPhone = this.state.listContent.filter(m => m.class === 'SmartPhone');
        this.setState({
            fetchFilterSmartPhone: filterDataSmartPhone,
            statusHideShowComputer: false,
            statusHideShowJewelry: false,
            statusHideShowElectronis: false,
            statusHideShowSport: false,
            status: false,
            statusHideShowSmartPhone: true
        })
    }
    onViewElectronis = () => {
        let filterDataElectronis = this.state.listContent.filter(m => m.class === 'Electronis');
        this.setState({
            fetchFilterElectronis: filterDataElectronis,
            statusHideShowComputer: false,
            statusHideShowSmartPhone: false,
            statusHideShowJewelry: false,
            statusHideShowSport: false,
            status: false,
            statusHideShowElectronis: true
        })
    }
    onViewJewelry = () => {
        let filterDataJewelry = this.state.listContent.filter(m => m.class === 'Jewelry');
        this.setState({
            fetchFilterJewelry: filterDataJewelry,
            statusHideShowComputer: false,
            statusHideShowSport: false,
            statusHideShowSmartPhone: false,
            statusHideShowElectronis: false,
            status: false,
            statusHideShowJewelry: true
        })
    }
    onViewSport = () => {
        let filterDataSport = this.state.listContent.filter(m => m.class === 'Sport');
        this.setState({
            fetchFilterSport: filterDataSport,
            statusHideShowComputer: false,
            statusHideShowJewelry: false,
            statusHideShowElectronis: false,
            statusHideShowSmartPhone: false,
            status: false,
            statusHideShowSport: true
        })
    }



    render() {

        const styles = {
           
            product: {
                marginTop:50,
                textAlign: 'center',
                '@media  (max-width: 767px)': {
                    product: {
                        textAlign: 'center',
                    }
                }
            },
            tabsProduct: {

                paddingBottom: 25,
                textAlign: 'center',
            },
            title: {
                color: '#444444',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
            },
            tabsTitle: {
                display: 'inline-flex',
                '@media  (max-width: 767px)': {
                    tabsTitle: {
                        display: 'inline-block ',
                        width: '100%',
                    }
                }

            },

            tabs: {
                marginRight: 12,
                '@media  (max-width: 767px)': {
                    tabs: {
                        display: 'block',
                        margin: '0px 0px 20px 0px',
                        width: '100%',
                    }
                }


            },
            tabText: {
                textTransform: 'capitalize',
                textDecoration: 'none',
                color: '#444',
                fontSize: 16,
                padding: '6px 20px',
                border: 'solid 1px#e3e3e3',
                WebkitBorderRadius: 32,
                borderRadius: 32,
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: ["rgb(64,198,255)"],
                    color: ['#fff'],
                    transition: ['width 2s'],
                },
                '@media  (max-width: 767px)': {
                    tabText: {
                        width: '100%',
                        display: 'block',
                    },
                }
            },
            itemProduct: {
                marginBottom: 20,
            },
            cardButton: {
                paddingBottom: 15,
            },
            productImg:{
                width:250
            }
        }

        let mapContent = this.state.listContent.map((value, key) => (

            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>

                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>


            </Grid>

        ));

        let mapContentFilterComputer = this.state.fetchFilterComputer.map((value, key) => (
            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>
                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>

            </Grid>


        ))

        let mapContentFilterSmartPhone = this.state.fetchFilterSmartPhone.map((value, key) => (
            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>
                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>


            </Grid>
        ))
        let mapContentFilterSport = this.state.fetchFilterSport.map((value, key) => (
            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>
                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>


            </Grid>
        ))
        let mapContentFilterJewelry = this.state.fetchFilterJewelry.map((value, key) => (
            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>
                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>


            </Grid>
        ))
        let mapContentFilterElectronis = this.state.fetchFilterElectronis.map((value, key) => (
            <Grid style={styles.itemProduct} item lg="3" md="3" sm="6" key={key}>
                <Paper>
                    <a href="#"><img style={styles.productImg} src={value.image} alt="" /></a>
                    <div style={styles.cardBody}>
                        <h4><a href="#" style={styles.cardTitle}>{value.title}</a></h4>
                        <div style={styles.startRating}>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                        <p style={styles.cardPrice}>{value.price}</p>
                        <div style={styles.cardButton}>
                            <Button variant="contained" color="primary">Add to cart</Button>
                        </div>
                    </div>
                </Paper>


            </Grid>
        ))
        return (
            <>
                <div style={styles.product}>
                    <div style={styles.tabsProduct}>

                        <h3 style={styles.title}>NEW PRODUCT</h3>
                        <div style={styles.tabsTitle}>
                            <div style={styles.tabs}>
                                <a style={styles.tabText} onClick={this.onViewAll}> All Product </a>
                            </div>

                            <div style={styles.tabs}>
                                <a style={styles.tabText} onClick={this.onViewComputer}>Computer</a>
                            </div>

                            <div style={styles.tabs}>
                                <a style={styles.tabText} onClick={this.onViewSmartPhone}>SmartPhone</a>
                            </div>
                            <div style={styles.tabs}>

                                <a style={styles.tabText} onClick={this.onViewElectronis}>Electronis</a>
                            </div>
                            <div style={styles.tabs}>
                                <a style={styles.tabText} onClick={this.onViewJewelry}>Jewelry</a>
                            </div>
                            <div style={styles.tabs}>
                                <a style={styles.tabText} onClick={this.onViewSport}>Sport</a>
                            </div>
                        </div>

                    </div>

                    <Container maxWidth="lg">
                        <Grid item lg="12" container spacing={1}  >
                            {this.state.status === true ? mapContent : ""}
                            {this.state.statusHideShowComputer === true ? mapContentFilterComputer : ""}
                            {this.state.statusHideShowSmartPhone === true ? mapContentFilterSmartPhone : ""}
                            {this.state.statusHideShowElectronis === true ? mapContentFilterElectronis : ""}
                            {this.state.statusHideShowJewelry === true ? mapContentFilterJewelry : ""}
                            {this.state.statusHideShowSport === true ? mapContentFilterSport : ""}

                        </Grid>
                    </Container>
                </div>
            </>
        );
    }
}

export default Product;
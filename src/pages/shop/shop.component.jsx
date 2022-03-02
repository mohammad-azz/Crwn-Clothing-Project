import React from "react";
import SHOP_DATA from "./shop.data";
class ShopPage extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
             collections:SHOP_DATA
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/ProductsViews")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
             
                collections: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render(){
        return <div>SHOP PAGE</div>
    }
}
export default ShopPage;
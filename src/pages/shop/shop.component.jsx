import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from  '../../componens/collection-preview/collection-preview.component'
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
        const {collections} = this.state;
        return( <div className="shop-page">{
            collections.map(({id,...otherCollectionProps})=> (
                <CollectionPreview key={id} otherCollectionProps></CollectionPreview>
            ))
            }</div>)
    }
}
export default ShopPage;
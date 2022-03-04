import React from "react";
import CollectionPreview from  '../../componens/collection-preview/collection-preview.component'
class ShopPage extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
             collections:[]
        };
    } 
    componentDidMount() {
        fetch("http://localhost:8010/proxy/api/ProductsViews" ,{mode: 'cors',method: 'GET'})
          .then(result => result.json()).then(shopdata => this.setState({collections:shopdata}));
      }
    render(){
        const {collections} = this.state;
        return( <div className="shop-page">{
            collections.map(({id,...otherCollectionProps})=> (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
            }</div>)
    }
}
export default ShopPage;
import React, { useEffect } from "react";
import "./ShopPage.scss";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/Collections-Overview.container";
import CollectionPageContainer from "../Collection/CollectionContainer";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop-actions";


const ShopPage = ({fetchCollectionsStart,match}) => {
  
  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart]);
    return (
      <div className="shop-page" style={{ color: "#eee" }}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);

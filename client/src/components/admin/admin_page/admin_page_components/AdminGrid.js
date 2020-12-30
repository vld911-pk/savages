import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "../admin_styles/Grid";
import GridItem from "../admin_styles/GridItem";

function AdminGrid() {

const history = useHistory();

  return (
    <React.Fragment>
      <Grid>
        <GridItem onClick = {() => history.push('/user/admin/cards')}>   Cards </GridItem>
        <GridItem onClick = {() => history.push('/user/admin/numbers')}> Numbers </GridItem>
        <GridItem onClick = {() => history.push('/user/admin/empty')}> ... </GridItem>
      </Grid>
    </React.Fragment>
  );
}

export default AdminGrid;

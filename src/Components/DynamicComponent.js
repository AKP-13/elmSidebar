import React, { Component } from "react";
class DynamicComponent extends Component {
    render() {
        const { name } = this.props;
        return <h1>{name} Dashboard</h1>;
    }
}
export default DynamicComponent;

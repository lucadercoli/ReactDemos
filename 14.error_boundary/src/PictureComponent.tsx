import React, { Component } from "react";

export default class PictureComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <img className="imageThumbnail" 
                        src={this.props.src} alt={this.props.src} />
                </div>
                <div className="imageLabel">{this.props.children}</div>
            </div>
        );
    }
}
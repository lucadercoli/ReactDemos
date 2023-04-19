import React, { Component } from "react";
import Picture from "./models/Picture";
import PictureComponent from "./PictureComponent";

interface IPictureListProps {
    images: Picture[];
}

export default class PictureListComponent 
        extends Component<IPictureListProps, any>{
    constructor(props: IPictureListProps) {
        super(props);
    }

    render() {
        let images = this.props.images;

        var imagesItems = images.map(
            (image) => <li className="imageItem" key={image.id}>
                <PictureComponent src={image.url}>
                    {image.description}
                </PictureComponent>
            </li>
        );

        return(
            <div>
                {this.props.children}
                <ul className="imageList">{imagesItems}</ul>
            </div>
        );
    }
}
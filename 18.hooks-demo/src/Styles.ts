import { createStyles } from "@material-ui/core";

const styles : any = {
    app: {
        textAlign: "center",
        margin: "15px"
    }
    , root: {      
        padding: 20,
        backgroundColor: '#F0F0F0'
    }
    , right : {
        textAlign: "right"
    }
    , center : {
        textAlign: "center"
    }
    , tableHead: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
    , whiteText: {
        color: 'white'
    }
    , redText: {
        color: "red",
        backgroundColor: "#F0F0F0",
        padding: "5px"
    }
    , box: {
        margin: "5px"
    }
    , redBox: {
        marginBottom: "15px",
        border: "3px solid red",
        backgroundColor: "#909090",
        padding: "10px"
    }
    , navyBox: {
        marginBottom: "15px",
        border: "3px double navy",
        backgroundColor: "#909090",
        padding: "10px"
    }
};

const AppStyles = createStyles(styles);

export default AppStyles;
import { createStyles } from "@material-ui/core";

const styles : any = {
    root: {      
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
};

const AppStyles = createStyles(styles);

export default AppStyles;
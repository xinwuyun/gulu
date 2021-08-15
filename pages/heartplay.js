import React from "react";
import SmoothieComponent, { TimeSeries } from "react-smoothie";
import { useWebSocket } from "ahooks";
import Image from "next/image";
import {Grid,Container,Paper,Button,Typography} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListIcon from '@material-ui/icons/List';
import AlbumIcon from '@material-ui/icons/Album';
import ReplayIcon from '@material-ui/icons/Replay';
const useStyles = makeStyles((theme)=>({
  header:{
    position: "fixed",
    top: 0,
    width: "100%",
    height: 100,
    minWidth: "100px",
    display: "flex",
    flexDirection: "row"
  },
  ChoiceBox: {
    height: 100,
    width: "100%",
    margin: 0,
    fontSize: 50,
    lineHeight: "100px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  contentPaper:{
    marginTop:"100px",
    height:"550px",
    marginRight:"150px",
    marginLeft:"150px",
    lineHeight: "20px",
    fontFamily: "Roboto",
    border: "10px solid rgba(141, 128, 128, 1)"
},
  content: {
    marginTop: 100,
    height: 700,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    marginTop:"20px",
    position: "fixed",
    //bottom: 0,
    height: 120,
    width: "100%",
    backgroundColor: "rgba(232, 232, 232, 0.3)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  funcBtnTimeBegin: {
    width: 350,
    height: 100,
    //lineHeight: "100px",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(16, 15, 15, 0.34)",
    color: "white",
    borderRadius: 40,
  },
  funcBtnTimeEnd: {
    marginleft:"30px",
    width: 350,
    height: 100,
    //lineHeight: "100px",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(16, 15, 15, 0.34)",
    color: "white",
    borderRadius: 40,
  },
  funcBtn: {
      marginTop:"200px",
    width: 350,
    height: 100,
    lineHeight: "100px",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(16, 15, 15, 0.34)",
    color: "white",
    borderRadius: 50,
  }
  
}));



export default function HeartListPage(){
    const styles = useStyles();
    const style = {
        bgd: {
            position: "fixed",
            width: "1920px",
            margin: "0",
            padding: "0",
            backgroundImage: `url("/hospital.png")`,
            height: "1080px",
            backgroundColor: "#DFDFDF",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat"
        }
    };
   
    return(
        <div style={style.bgd}>
          <div className={styles.header}>
              <div className={styles.ChoiceBox}></div>
          </div>
          <div className={styles.contentPaper}>
          </div>
          <div className={styles.footer}>
                <div className={styles.funcBtnTimeBegin}>起始时间</div>
                <div className={styles.funcBtnTimeEnd}>结束时间</div>
          </div>
          <div className={styles.footer}>
            <div className={styles.funcBtn}><ListIcon fontSize="inherit"></ListIcon> 播放</div>
          </div>      
        
            
           
        </div>
    );
}

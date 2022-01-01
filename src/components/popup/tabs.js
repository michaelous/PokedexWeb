import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./tabPanel";
import {Box} from "@material-ui/core";
import {
    getAbility, getAtkStats, getBaseExp, getDefStats, getHeight, getHPStats, getMove,
    getSpecialStats, getSpeciesName, getType, getWeight
} from "../../helpers/pokemonHelper";

export default function FullWidthTabs({data}) {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box className={'tabsWrapper'}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary">
                <Tab className="tabHeader" label="About " />
                <Tab className="tabHeader" label="Base" />
                <Tab className="tabHeader" label="Moves" />
            </Tabs>
    
            <SwipeableViews
                className="swipeWrapper"
                index={value}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                onChangeIndex={handleChangeIndex}>

                <TabPanel className={"tabPanel"} value={value} index={0} dir={theme.direction}>
                    <Box display="flex" className={"aboutTabItem"} justifyContent="center">
                        <p className={"dataHeader"}>Name:</p>
                        <p className={"dataStat"}>{getSpeciesName(data)}</p>
                    </Box>

                    <Box display="flex" className={"aboutTabItem"} justifyContent="center"
                         flexDirection={"row"}>
                        <p className={"dataHeader"}>BaseExp:</p>
                        <p className={"dataStat"}>{getBaseExp(data)}</p>
                    </Box>

                    <Box display="flex" className={"aboutTabItem"} justifyContent="center"
                         flexDirection={"row"}>
                        <p className={"dataHeader"}>Ability:</p>
                        <p className={"dataStat"}>{getAbility(data)}</p>
                    </Box>

                    <Box display="flex" className={"aboutTabItem"} justifyContent="center"
                         flexDirection={"row"}>
                        <p className={"dataHeader"}>Weight:</p>
                        <p className={"dataStat"}>{getWeight(data)}</p>
                    </Box>

                    <Box display="flex" className={"aboutTabItem"} justifyContent="center"
                         flexDirection={"row"}>
                        <p className={"dataHeader"}>Type:</p>
                        <p className={"dataStat"}>{getType(data)}</p>
                    </Box>

                    <Box display="flex" className={"aboutTabItem"} justifyContent="center"
                         flexDirection={"row"}>
                        <p className={"dataHeader"}>Height:</p>
                        <p className={"dataStat"}>{getHeight(data)}</p>
                    </Box>
                </TabPanel>

                <TabPanel className={"tabPanel baseTab"} value={value} index={1} dir={theme.direction}>
                    <Box className={"baseTabItem"} justifyContent={"space-around"} flexDirection={"row"}>
                        <p className={"dataHeader"}>HP:</p>
                        <p className={"dataStat"}>{getHPStats(data)}</p>
                        <div className={"progressBar red"}>
                            <span style={{ width: `${getHPStats(data) > 100 ? 100 : getHPStats(data)}%` }} />
                        </div>
                    </Box>
                    <Box className={"baseTabItem"} justifyContent={"space-around"} flexDirection={"row"}>
                        <p className={"dataHeader"}>Attack:</p>
                        <p className={"dataStat"}>{getAtkStats(data)}</p>
                        <div className={"progressBar green"}>
                            <span style={{ width: `${getAtkStats(data) > 100 ? 100 : getAtkStats(data)}%` }} />
                        </div>
                    </Box>

                    <Box className={"baseTabItem"} justifyContent={"space-around"} flexDirection={"row"}>
                        <p className={"dataHeader"}>Defence:</p>
                        <p className={"dataStat"}>{getDefStats(data)}</p>
                        <div className={"progressBar red"}>
                            <span style={{ width: `${getDefStats(data) > 100 ? 100 : getDefStats(data)}%` }} />
                        </div>
                    </Box>
                    <Box className={"baseTabItem"} justifyContent={"space-around"} flexDirection={"row"}>
                        <p className={"dataHeader"}>Special:</p>
                        <p className={"dataStat"}>{getSpecialStats(data)}</p>
                        <div className={"progressBar green"}>
                            <span style={{ width: `${getSpecialStats(data) > 100 ? 100 : getSpecialStats(data)}%` }} />
                        </div>
                    </Box>
                </TabPanel>

                <TabPanel className={"tabPanel"} value={value} index={2} dir={theme.direction}>
                    <Box className={"movesTab"}>
                        {data.moves.slice(0, 9).map((val, index) => {
                            return <p key={getMove(data, index)} className={"move"}>{getMove(data, index)}</p>
                        })}
                    </Box>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

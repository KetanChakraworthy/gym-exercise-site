import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from '../pages/Home/SearchExercises/BodyPart/BodyPart';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import ExerciseCard from '../pages/Home/Exercises/ExerciseCard/ExerciseCard'

export default function HorizontalScrollBar({ data, exercises, bodyPart, setBodyPart, isBodyPart }) {
    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => { scrollPrev() }} className='left-arrow' >
                <img src={ LeftArrowIcon} alt='left-arrow' />
            </Typography>
        )
    }
    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
            <Typography onClick={() => { scrollNext() }} className='right-arrow' >
                <img src={ RightArrowIcon} alt='right-arrow' />
            </Typography>
        )
    }



    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {
                data.map((item) => ( 
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m='0 40px'
                    >
                        {
                            isBodyPart ?
                            <BodyPart
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                                />
                                : <ExerciseCard exercise={item} />
                        }
                    </Box>
                 ) )
                }
        </ScrollMenu>
  )
}

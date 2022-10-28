import { useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import { DaySelectorStyled } from './styled';

export interface DaySelectorProps {
  className?: string;
  length?: number;
}

const DaySelector = ({ className, length = 30 }: DaySelectorProps) => {
  const [startDay, setStartDay] = useState<number | null>(null);
  const [endDay, setEndDay] = useState<number | null>(null);
  const [hoverDay, setHoverDay] = useState<number | null>(null);
  const days = Array.from({ length }, (_, i) => i + 1);
  const { colors } = useTheme();

  const handleDayClick = (day: number) => {
    if (startDay === null) {
      setStartDay(day);
    } else if (endDay === null) {
      if (day > startDay) {
        setEndDay(day);
      } else {
        setStartDay(day);
        setEndDay(startDay);
      }
    } else {
      setStartDay(day);
      setEndDay(null);
    }
  };

  return (
    <DaySelectorStyled className={clsx('DaySelector', className)}>
      <AnimatePresence>
        {/* <div className="overview">
          <div className="value">{startDay || hoverDay}</div>~
          <div className="value">{endDay || startDay === hoverDay ? null : hoverDay}</div>
          Day
        </div> */}

        <motion.div className="items" onHoverEnd={() => setHoverDay(null)}>
          {days.map(day => {
            const isActive = [startDay, endDay].includes(day);
            const isBetween = day > (startDay || hoverDay || 0) && day < (endDay || hoverDay || 0);

            return (
              <motion.button
                className={clsx('item', isActive && 'active', isBetween && 'between')}
                onClick={() => handleDayClick(day)}
                onHoverStart={() => setHoverDay(day)}
                key={day}
              >
                {hoverDay === day && (
                  <motion.div
                    className="bg"
                    layoutId="dayBG"
                    animate={{
                      ...(isActive && { backgroundColor: colors.primary }),
                    }}
                    transition={{ duration: 0.2, delay: 0, ease: 'easeOut' }}
                  />
                )}
                <span>{day}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </DaySelectorStyled>
  );
};

export default DaySelector;

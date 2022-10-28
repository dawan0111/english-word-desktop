import { useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import { DaySelectorStyled } from './styled';

export interface DaySelectorProps {
  className?: string;
  length?: number;
  start: number | null;
  end: number | null;
  onChange?: (start: number | null, end: number | null) => void;
}

const DaySelector = ({ className, length = 30, start, end, onChange }: DaySelectorProps) => {
  const [startDay, setStartDay] = useState<number | null>(start);
  const [endDay, setEndDay] = useState<number | null>(end);
  const [hoverDay, setHoverDay] = useState<number | null>(null);
  const days = Array.from({ length }, (_, i) => i + 1);
  const { colors } = useTheme();

  const handleDayClick = (day: number) => {
    let start = startDay;
    let end = endDay;

    if (startDay === null) {
      start = day;
    } else if (endDay === null) {
      if (day > startDay) {
        end = day;
      } else {
        start = day;
        end = startDay;
      }
    } else {
      start = day;
      end = null;
    }

    setStartDay(start);
    setEndDay(end);

    onChange?.(start, end);
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
